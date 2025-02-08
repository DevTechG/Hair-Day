import { apiConfig } from "./api-config"


export async function scheduleNew({id, name, when}) {
    try {
        // Faz a requisição para enviar os dados do agendamento.
        await fetch (`${apiConfig.baseURL}/schedules`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({id, name, when}),
        })

        // Exibe mensagem do agendamento realizado com sucesso.
        alert("Agendamento realizado com sucesso!")
    } catch (error) {
        alert("Não foi possível agenda. Tente novamente mais tarde.")
    }
}