import ldapClient from "@/lib/ldapconfig";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {

  const opts = {
    // filter: `(sAMAccountName=${username})`, // Para buscar um usuário específico
    scope: "sub",
    attributes: [
      "name",
      "description",
      "givenName",
      "department",
      "title",
      "mobile",
      "mail",
      "memberOf"
    ],
  };

  const ldapUser = "IPESAUDE\\" + process.env.LDAP_USER;
  const ldapPassword = process.env.LDAP_PASSWORD;

  ldapClient.bind(ldapUser, ldapPassword, (err) => {
    if (err) {
      console.log("Erro no login");
      return NextResponse.json({ error: "Erro na autenticação LDAP" });
    } else {
      console.log("login funcionou");
    }

    ldapClient.search(
      "OU=USUARIOS,OU=IPESAUDE,DC=IPESAUDE,DC=INTRA,DC=RS,DC=GOV,DC=BR",
      opts,
      (ldapErr, ldapRes) => {
        if (ldapErr) {
          console.log("erro em fazer a pesquisa");
          return NextResponse.json({ error: "Erro na busca LDAP" });
        } else {
          ldapRes.on("searchEntry", async (entry) => {
            let nomeCompleto = ''
            let description = ''
            let givenName = ''
            let department = ''
            let title = ''
            let mobile = ''
            let mail = ''
            let memberOf = ''
            JSON.stringify(entry.pojo.attributes.map((obj) => {
              const valores = JSON.stringify(obj.values).replace("[", "").replace("\"", "").replace("]", "").replace("\"", "")
              if (obj.type == 'name') {
                  nomeCompleto = valores
              } if (obj.type == 'description') {
                  description = valores
              } if (obj.type == 'givenName') {
                  givenName = valores
              } if (obj.type == 'department') {
                  department = valores
              } if (obj.type == 'title') {
                title = valores
              } if (obj.type == 'mobile') {
                mobile = valores
              } if (obj.type == 'mail') {
                mail = valores
              } if (obj.type == 'memberOf') {
                memberOf = valores
              }}))

            console.log(nomeCompleto, description, givenName, department, title, mobile, mail)
            try {
              // Insere no banco de dados usando Prisma
              await prisma.usuarios.create({
                data: {
                  nomeCompleto: nomeCompleto,
                  description: description,
                  givenName: givenName,
                  department: department,
                  title: title,
                  mobile: mobile,
                  mail: mail,
                  memberOf: memberOf,       
                },
              });
              console.log('usuario inserido')
              return NextResponse.json({ message: 'Usuário inserido com sucesso' });
            } catch (dbErr) {
              console.log('usuario nao inserido')
              return NextResponse.json({ error: 'Erro ao inserir no banco de dados' });
            }
          });
        }

        ldapRes.on("error", () => {
          console.log("Erro na busca LDAP");
          return NextResponse.json({ error: "Erro na busca LDAP" });
        });

        ldapRes.on("end", () => {
          console.log("end");
          ldapClient.unbind();
        });
      }
    );
  });
}