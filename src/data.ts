import { Procedure, Differential, Testimonial, TimelineEvent, LocationInfo } from './types';

export const DOCTOR_INFO = {
  name: "Dra. Iara Beatriz Arruda",
  title: "Especialista em Implantodontia & Reabilitação Oral",
  cro: "CRO/SC 19460",
  shortCredentials: [
    "Especialista em Implantodontia",
    "Pós-graduada em Cirurgia Oral Menor",
    "Pioneira em Acompanhamento Pós-Operatório Nutricional"
  ],
  bio: "Graduada em Odontologia pela Uniavan de Balneário Camboriú – SC, e com especializações avançadas pelo renomado Instituto ORBIS, a Dra. Iara Beatriz Arruda atua de forma dedicada na transformação de vidas através da reabilitação oral de alta performance. Oferece soluções sofisticadas que unem o rigor científico à estética refinada e ao acolhimento humanizado.",
  clinicsSummary: "Com atendimento exclusivo em Balneário Camboriú, Bombinhas e Tijucas, a Dra. Iara desenvolveu um ecossistema de atendimento focado na segurança do paciente, contando inclusive com um suporte pós-cirúrgico integrado para a melhor recuperação possível."
};

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: "Graduação",
    title: "Bacharel em Odontologia",
    description: "Formada pela Uniavan de Balneário Camboriú – SC, desenvolvendo excelência clínica e visão científica voltada ao bem-estar do paciente."
  },
  {
    year: "Especialização",
    title: "Pós-Graduação em Cirurgia Oral Menor",
    description: "No prestigiado Instituto ORBIS, aprofundando-se em metodologias cirúrgicas seguras com ênfase em técnicas minimamente invasivas."
  },
  {
    year: "Diferencial",
    title: "Especialização em Implantodontia",
    description: "Concluída no Instituto ORBIS, certificando-se no planejamento digital, cirurgia guiada e implantes de alta precisão."
  },
  {
    year: "Inovação",
    title: "Acompanhamento Nutricional Exclusivo",
    description: "Criação do método de suporte pós-operatório em parceria com profissional de Nutrição, focado na recuperação acelerada e segurança alimentar."
  }
];

export const DIFFERENTIALS: Differential[] = [
  {
    id: "diff_1",
    title: "Planejamento Personalizado",
    description: "Seu caso é estudado nos mínimos detalhes por meio de tomografias digitais e protótipos 3D, garantindo previsibilidade absoluta antes do procedimento.",
    iconName: "Compass"
  },
  {
    id: "diff_2",
    title: "Atendimento Humanizado",
    description: "Ambiente calmo e acolhedor. Protocolos personalizados para controle de ansiedade e conforto absoluto do início ao fim.",
    iconName: "Heart"
  },
  {
    id: "diff_3",
    title: "Técnicas Modernas",
    description: "Implantes de alta tecnologia com opção de carga imediata e cirurgias guiadas, que reduzem o tempo cirúrgico e otimizam a cicatrização.",
    iconName: "Cpu"
  },
  {
    id: "diff_4",
    title: "Acompanhamento Completo",
    description: "Monitoramento atencioso no pré, trans e pós-operatório, assegurando que o paciente se sinta cuidado e assistido a cada momento.",
    iconName: "Activity"
  },
  {
    id: "diff_5",
    title: "Rede de Clínicas Parceiras",
    description: "Consultórios premium localizados em Balneário Camboriú, Bombinhas e Tijucas com infraestrutura de ponta e máxima biossegurança.",
    iconName: "MapPin"
  },
  {
    id: "diff_exclusive",
    title: "Suporte Pós-Operatório Nutricional",
    description: "Protocolo pioneiro de acompanhamento com nutricionista parceira, desenvolvendo planos alimentares específicos para a fase líquida/pastosa inicial, reduzindo desconfortos e acelerando significativamente a regeneração dos tecidos.",
    isHighlighted: true,
    iconName: "Sparkles"
  }
];

export const PROCEDURES: Procedure[] = [
  {
    id: "proc_1",
    title: "Implantes Dentários",
    description: "Substituição biocompatível de raízes perdidas por pinos de titânio de última geração, restabelecendo a estética do sorriso e a função mastigatória sem desgastar os dentes adjacentes.",
    details: [
      "Substituição de elemento único ou múltiplos dentes",
      "Tecnologia de osseointegração acelerada passo a passo",
      "Processo planejado digitalmente para máxima precisão"
    ],
    iconName: "Layers"
  },
  {
    id: "proc_2",
    title: "Prótese sobre Implante",
    description: "Estruturas protéticas fixas (coroas singulares ou protocolo total de dentes) parafusadas sobre os implantes com estabilidade cirúrgica absoluta, eliminando dentaduras soltas.",
    details: [
      "Próteses tipo Protocolo Branemark",
      "Coroas unitárias ou pontes em cerâmica de alta qualidade",
      "De volta a potência mastigatória original com segurança"
    ],
    iconName: "ShieldCheck"
  },
  {
    id: "proc_3",
    title: "Cirurgia Oral Menor",
    description: "Procedimentos cirúrgicos de precisão no ambiente de consultório, englobando remoção segura de dentes inclusos/sisos, tracionamentos de dentes e enxertos ósseos.",
    details: [
      "Extração cuidadosa de sisos em posições complexas",
      "Enxertos ósseos estruturais para viabilização de implantes",
      "Uso de anestesia moderna e monitoramento pós-operatório"
    ],
    iconName: "Scissors"
  },
  {
    id: "proc_4",
    title: "Reabilitação Oral",
    description: "Um planejamento estético e funcional de longo alcance, combinando coroas de porcelana, facetas e procedimentos reconstrutivos para devolver o equilíbrio à saúde bucal secundariamente afetada.",
    details: [
      "Análise completa da dinâmica oclusal (mordida)",
      "Recuperação das dimensões verticais da face",
      "Integração perfeita entre estética de sorriso e conforto funcional"
    ],
    iconName: "Sparkle"
  },
  {
    id: "proc_5",
    title: "Avaliação Especializada",
    description: "Diagnóstico premium por imagem e exame clínico minucioso para identificar gargalos de saúde bucal e delinear o seu plano terapêutico personalizado.",
    details: [
      "Exame clínico pautado em lentes e magnificação",
      "Mapeamento preventivo de desordens na mordida",
      "Prescrição exata da melhor solução para o seu estilo de vida"
    ],
    iconName: "FileCheck"
  }
];

export const LOCATIONS: LocationInfo[] = [
  {
    name: "Balneário Camboriú",
    address: "Avenida Brasil, Centro - Climatizado, com vagas e privacidade total para você.",
    mapsUrl: "https://maps.google.com/?q=Avenida+Brasil,+Balneario+Camboriu,+SC",
    phone: "+5547999991234"
  },
  {
    name: "Bombinhas",
    address: "Avenida Leopoldo Zarling, Centro - Estrutura focada em conforto e tranquilidade costeira.",
    mapsUrl: "https://maps.google.com/?q=Avenida+Leopoldo+Zarling,+Bombinhas,+SC",
    phone: "+5547999991234"
  },
  {
    name: "Tijucas",
    address: "Rua Jacob Lameu Tavares, Centro - Estrutura de altíssimo padrão, moderna e acolhedora.",
    mapsUrl: "https://maps.google.com/?q=Rua+Jacob+Lameu+Tavares,+Tijucas,+SC",
    phone: "+5547999991234"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test_1",
    name: "Amanda Salles",
    role: "Administradora",
    location: "Balneário Camboriú",
    text: "Minha cirurgia de implante com a Dra. Iara foi fantástica. Eu tinha muito medo de dor, mas a paciência e a técnica cirúrgica dela me deixaram totalmente tranquila. O acolhimento com nutricionista especializada no pós-operatório fez toda a diferença em como me recuperei!",
    stars: 5
  },
  {
    id: "test_2",
    name: "Dr. Ricardo Mendes",
    role: "Empresário",
    location: "Tijucas",
    text: "Excelente profissional! Fiz as próteses fixas sobre implante e hoje consigo me alimentar com qualquer tipo de comida de novo. A atenção que ela dá aos mínimos detalhes é incrível. Clínica de altíssimo nível, recomendo de olhos fechados.",
    stars: 5
  },
  {
    id: "test_3",
    name: "Beatriz Pinheiro",
    role: "Arquiteta",
    location: "Bombinhas",
    text: "Consultório espetacular no centro de Bombinhas. A Dra. Iara foi super atenciosa, explicou passo a passo o processo e o planejamento digital 3D guiado me inspirou extrema segurança. O sorriso ficou exatamente como planejado. Natural e belo.",
    stars: 5
  }
];
