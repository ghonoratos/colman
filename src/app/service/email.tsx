type EmailInfos = {
  name: string;
  email: string;
  phone: string;
  message: string;
  policy: boolean;
};

export const EmailService = (data: EmailInfos) => {
  const generatePlainText = () => {
    return `Nome: ${data.name}; Email: ${data.email}; phone: ${
      data.phone
    }; Mensagem: ${
      data.message
    }; Orçamento gerado em: ${new Intl.DateTimeFormat("pt-BR", {
      dateStyle: "full",
      timeStyle: "long",
      timeZone: "America/Sao_Paulo",
    }).format(new Date())}`;
  };

  const generateEmailHTML = () => {
    return `
      <div>
        <b>Nome</b>: ${data.name} <br />
        <b>Email</b>: ${data.email} <br />
        <b>Telefone</b>: ${data.phone} <br />
        <b>Mensagem</b>: ${data.message} <br /> <br />

        <small> Orçamento gerado em: ${new Intl.DateTimeFormat("pt-BR", {
          dateStyle: "full",
          timeStyle: "long",
          timeZone: "America/Sao_Paulo",
        }).format(new Date())}
      </div>
      `;
  };

  return {
    generatePlainText,
    generateEmailHTML,
  };
};
