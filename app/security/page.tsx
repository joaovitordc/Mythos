import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Segurança e Privacidade | Kairos",
  description:
    "Política de segurança da informação e privacidade da Kairos — práticas de proteção de dados, criptografia, controle de acesso e conformidade com a LGPD.",
};

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-black text-white px-8 lg:px-32 pt-32 pb-24">
      <div className="max-w-3xl mx-auto">
        <header className="mb-16 border-b border-white/10 pb-10">
          <p className="text-[11px] text-white/60 tracking-[0.18em] uppercase font-medium mb-4">
            Kairos · Information Security
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Política de Segurança da Informação e Privacidade
          </h1>
          <p className="mt-5 text-sm text-white/55">
            Última atualização: 17 de abril de 2026 · Versão 1.0
          </p>
        </header>

        <section className="space-y-5 text-white/75 leading-relaxed text-[15px]">
          <p>
            A <strong>Kairos</strong> é uma empresa brasileira de engenharia de
            software e inteligência artificial, desenvolvedora da plataforma
            <strong> EllO ERP</strong>. Esta política descreve os controles
            técnicos, administrativos e organizacionais adotados para proteger
            as informações manipuladas por nossos sistemas e integrações, em
            conformidade com a Lei Geral de Proteção de Dados (LGPD &ndash; Lei
            nº 13.709/2018) e boas práticas internacionais de segurança da
            informação.
          </p>
        </section>

        <Section number="1" title="Escopo">
          <p>
            Esta política aplica-se a todos os produtos, serviços, integrações
            e infraestruturas operados pela Kairos, incluindo a plataforma EllO
            ERP e suas integrações com marketplaces e parceiros externos como
            Shopee, TikTok Shop e demais canais de venda e atendimento.
          </p>
        </Section>

        <Section number="2" title="Dados tratados">
          <p>
            A Kairos coleta e processa exclusivamente os dados necessários ao
            funcionamento das integrações contratadas pelos seus clientes,
            incluindo:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              Dados de pedidos, produtos e estoque disponibilizados pelas APIs
              dos marketplaces autorizados pelo cliente;
            </li>
            <li>
              Mensagens de chat trocadas entre o vendedor e o comprador, quando
              a funcionalidade de atendimento centralizado está ativa;
            </li>
            <li>
              Tokens de autenticação (access tokens e refresh tokens) emitidos
              pelos marketplaces;
            </li>
            <li>
              Dados cadastrais mínimos dos usuários internos do ERP (nome,
              e-mail corporativo, perfil de acesso).
            </li>
          </ul>
          <p className="mt-4">
            Nenhum dado é vendido, compartilhado ou usado para finalidades
            distintas das expressamente autorizadas pelo cliente e pelas
            políticas dos marketplaces integrados.
          </p>
        </Section>

        <Section number="3" title="Criptografia">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Em trânsito:</strong> todo o tráfego entre o EllO ERP,
              seus usuários e as APIs externas é protegido por TLS 1.2 ou
              superior (HTTPS obrigatório);
            </li>
            <li>
              <strong>Em repouso:</strong> tokens de acesso, chaves de API e
              dados sensíveis são armazenados com criptografia via Active Record
              Encryption do Rails, utilizando algoritmos AES-256-GCM;
            </li>
            <li>
              <strong>Segredos e credenciais:</strong> gerenciados via cofre
              criptografado (Rails encrypted credentials) com chave mestra
              armazenada fora do repositório, e rotacionada periodicamente.
            </li>
          </ul>
        </Section>

        <Section number="4" title="Controle de acesso">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Autenticação baseada em senha com requisitos mínimos de
              complexidade e armazenamento via hash bcrypt (Devise);
            </li>
            <li>
              Controle de acesso baseado em papéis (RBAC) por usuário, limitando
              cada colaborador às operações estritamente necessárias;
            </li>
            <li>
              Whitelist de endereços IP para chamadas a APIs externas em
              produção, conforme exigido pelos parceiros (ex.: Shopee Open
              Platform);
            </li>
            <li>
              Logs de auditoria para ações sensíveis (autorização de lojas,
              alteração de dados de pedidos, envio de mensagens).
            </li>
          </ul>
        </Section>

        <Section number="5" title="Integrações com terceiros">
          <p>
            A Kairos integra-se exclusivamente com APIs oficiais dos
            marketplaces parceiros, respeitando integralmente seus termos de
            uso, limites de requisição e políticas de privacidade.
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              Acessos são concedidos por meio de fluxos OAuth 2.0
              oficiais &mdash; o cliente autoriza explicitamente cada loja;
            </li>
            <li>
              Nenhuma credencial do usuário do marketplace (login/senha) é
              armazenada em nossos sistemas;
            </li>
            <li>
              Tokens de acesso são revogáveis a qualquer momento pelo cliente,
              com exclusão imediata dos dados associados;
            </li>
            <li>
              Webhooks recebidos de parceiros são validados por assinatura
              criptográfica (HMAC-SHA256) antes de qualquer processamento.
            </li>
          </ul>
        </Section>

        <Section number="6" title="Retenção e exclusão de dados">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Dados operacionais (pedidos, mensagens, histórico) são
              armazenados enquanto o contrato com o cliente estiver ativo;
            </li>
            <li>
              Ao encerramento do contrato ou revogação da autorização, todos os
              dados associados à loja são apagados em até 30 dias corridos,
              salvo obrigação legal de retenção;
            </li>
            <li>
              Backups são criptografados, armazenados em ambiente segregado e
              também passam pelo mesmo ciclo de exclusão.
            </li>
          </ul>
        </Section>

        <Section number="7" title="Resposta a incidentes">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Monitoramento contínuo de logs e alertas automatizados para
              comportamentos anômalos (falhas de autenticação, picos de
              requisição, erros HTTP 5xx);
            </li>
            <li>
              Em caso de incidente de segurança com impacto a dados pessoais,
              os clientes afetados e a Autoridade Nacional de Proteção de Dados
              (ANPD) serão notificados em até 72 horas, conforme exige a LGPD;
            </li>
            <li>
              Parceiros impactados (ex.: Shopee, TikTok Shop) serão
              notificados conforme exigências contratuais de cada API.
            </li>
          </ul>
        </Section>

        <Section number="8" title="Desenvolvimento seguro">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Revisão de código obrigatória antes de qualquer merge em
              produção;
            </li>
            <li>
              Análise estática de segurança automatizada em cada commit
              (Brakeman para Ruby on Rails);
            </li>
            <li>
              Linters e testes automatizados (cobertura mínima: 1,5x linhas de
              teste para cada linha de código de produção);
            </li>
            <li>
              Atualização periódica de dependências e monitoramento de
              vulnerabilidades conhecidas (CVE).
            </li>
          </ul>
        </Section>

        <Section number="9" title="Privacidade e direitos do titular" anchor="privacidade">
          <p>
            Em conformidade com a LGPD, o titular dos dados pode a qualquer
            momento solicitar: confirmação do tratamento, acesso aos seus
            dados, correção de dados incompletos ou inexatos, anonimização,
            bloqueio ou eliminação de dados desnecessários, portabilidade a
            outro fornecedor, informações sobre compartilhamento e revogação
            do consentimento.
          </p>
          <p className="mt-3">
            As solicitações devem ser encaminhadas ao Encarregado de Dados (DPO)
            pelo e-mail{" "}
            <a
              href="mailto:privacidade@kairos.com.br"
              className="text-white underline underline-offset-4 hover:text-white/80"
            >
              privacidade@kairos.com.br
            </a>{" "}
            e serão respondidas em até 15 dias úteis.
          </p>
        </Section>

        <Section number="10" title="Contato">
          <p>
            Dúvidas, reporte de vulnerabilidades ou incidentes de segurança
            podem ser enviados para{" "}
            <a
              href="mailto:seguranca@kairos.com.br"
              className="text-white underline underline-offset-4 hover:text-white/80"
            >
              seguranca@kairos.com.br
            </a>
            . Respondemos em até 2 dias úteis.
          </p>
        </Section>

        <footer className="mt-16 pt-10 border-t border-white/10 text-xs text-white/40">
          <p>
            Este documento é revisado periodicamente. A versão em vigor é
            sempre a publicada nesta URL.
          </p>
        </footer>
      </div>
    </main>
  );
}

function Section({
  number,
  title,
  anchor,
  children,
}: {
  number: string;
  title: string;
  anchor?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={anchor} className="mt-14 scroll-mt-32">
      <h2 className="text-xs uppercase tracking-[0.18em] text-white/40 mb-4">
        {number}. {title}
      </h2>
      <div className="text-[15px] text-white/75 leading-relaxed">
        {children}
      </div>
    </section>
  );
}
