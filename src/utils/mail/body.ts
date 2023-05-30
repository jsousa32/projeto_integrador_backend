export function mailBody(name: string, token: string) {
    const url = process.env.URL;
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width" />
            <title>Boas Vindas</title>
    
            <style>
                .d-text {
                    font-size: 1.25rem;
                }
            </style>
        </head>
        <body style="margin: 0px; width: 100%; height: 100%">
            <div
                style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #09092a;
                    width: 100%;
                    height: 20%;
                    padding: 1rem 0 1rem 0;
                    border-radius: 10px 10px 0px 0px;
                "
            ></div>
            <div
                style="
                    display: flex;
                    flex-direction: column !importante;
                    padding: 1.5rem;
                    padding-left: 3rem;
                    height: 65%;
                    background-color: #f6f8f5;
                "
            >
                <h1>Seja bem vindo(a) ao Portal do SUS!</h1>
                <p class="d-text">Olá <strong>${name}</strong>,</p>
                <p class="d-text" style="margin-bottom: 2rem">
                    Para recadastrar sua senha basta clicar no link abaixo:
                    <br />
                    <br />

                    Link de acesso:
                    <a
                        href="${url}/reset/${token}"
                        style="font-size: 1.25rem; color: blue"
                        >Redefinir senha</a
                    >
                </p>
                <p>
                    <br />
                    <strong class="d-text" style="color: blue"
                        >Email gerado automaticamente, favor não responder este
                        email.</strong
                    >
                </p>
            </div>
            <div
                style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #09092a;
                    width: 100%;
                    height: 20%;
                    padding: 1rem 0 1rem 0;
                    border-radius: 0px 0px 10px 10px;
                "
            ></div>
        </body>
    </html>
    
`;
}
