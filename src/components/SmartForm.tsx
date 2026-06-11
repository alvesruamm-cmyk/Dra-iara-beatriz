import React, { useState } from "react";
import { 
  User, 
  Phone, 
  MapPin, 
  Stethoscope, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  Sparkles, 
  MessageCircle, 
  Activity,
  FileText
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function SmartForm() {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    cidade: "",
    procedimento: "",
    necessidade: "",
    respostaComplementar: ""
  });

  // Phone masking helper: (XX) XXXXX-XXXX
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.substring(0, 11);
    
    if (value.length > 6) {
      value = `(${value.substring(0, 2)}) ${value.substring(2, 7)}-${value.substring(7)}`;
    } else if (value.length > 2) {
      value = `(${value.substring(0, 2)}) ${value.substring(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }
    setFormData({ ...formData, telefone: value });
    if (errorMsg) setErrorMsg("");
  };

  // Complementary dynamic questions lookup
  const getComplementaryQuestion = () => {
    switch (formData.necessidade) {
      case "Perdi um dente":
        return {
          title: "Há quanto tempo você perdeu o dente or está com a falta dele?",
          options: [
            "Menos de 6 meses",
            "Entre 6 meses e 2 anos",
            "Mais de 2 anos (pode requerer enxerto ósseo prévio)",
            "Não cheguei a perder, mas está quebrado ou mole"
          ]
        };
      case "Preciso trocar prótese":
        return {
          title: "Qual tipo de prótese você utiliza atualmente?",
          options: [
            "Prótese móvel tradicional (Roach / com grampos)",
            "Prótese móvel total (famosa Dentadura)",
            "Ponte fixa ou coroa que apresenta desgaste"
          ]
        };
      case "Quero melhorar minha mastigação":
        return {
          title: "Qual o seu principal desconforto no momento de se alimentar?",
          options: [
            "Dor ou sensibilidade aguda ao mastigar sólidos",
            "Dificuldade de triturar alimentos como carnes ou espigas",
            "Insegurança de que a prótese se solte ou machuque a gengiva"
          ]
        };
      case "Desejo recuperar meu sorriso":
        return {
          title: "Quais aspectos visuais do sorriso mais lhe constrangem?",
          options: [
            "Falta visível de dentes ao sorrir ou falar",
            "Dentes com coloração insatisfatória ou escurecidos",
            "Vergonha geral de sorrir em fotografias ou reuniões"
          ]
        };
      default:
        return {
          title: "Há quanto tempo você percebe essa necessidade?",
          options: [
            "Menos de 1 ano",
            "Entre 1 e 3 anos",
            "Há mais de 3 anos"
          ]
        };
    }
  };

  const handleTextChange = (key: string, val: string) => {
    setFormData({ ...formData, [key]: val });
    if (errorMsg) setErrorMsg("");
  };

  const canGoNext = () => {
    if (step === 0) {
      return (
        formData.nome.trim().length >= 3 &&
        formData.telefone.replace(/\D/g, "").length >= 10 &&
        formData.cidade !== "" &&
        formData.procedimento !== ""
      );
    }
    if (step === 1) {
      return formData.necessidade !== "";
    }
    if (step === 2) {
      return formData.respostaComplementar !== "";
    }
    return true;
  };

  const handleNext = () => {
    if (!canGoNext()) {
      setErrorMsg("Por favor, preencha todos os campos destacados dessa etapa.");
      return;
    }
    setErrorMsg("");

    if (step === 2) {
      // Simulate highly advanced diagnostic calculation delay for visual trust
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setStep(3);
      }, 1500);
    } else {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setErrorMsg("");
    setStep(step - 1);
  };

  const handleSubmitWhatsApp = () => {
    // Generate beautiful structured text that drafts a highly qualified premium lead
    const query = [
      `*FORMULÁRIO DE PRÉ-AVALIAÇÃO INTELIGENTE*`,
      `*Paciente:* ${formData.nome}`,
      `*Telefone:* ${formData.telefone}`,
      `*Unidade de Interesse:* ${formData.cidade}`,
      `*Tratamento em Foco:* ${formData.procedimento}`,
      `*Principal Necessidade:* ${formData.necessidade}`,
      `*Detalhamento Clínico:* ${formData.respostaComplementar}`,
      `\n_Enviado de forma segura através da Landing Page da Dra. Iara Beatriz_`
    ].join("\n");

    const encryptedText = encodeURIComponent(query);
    window.open(`https://wa.me/5547999991234?text=${encryptedText}`, "_blank");
  };

  // Progress Bar percentage mapping
  const progressPercent = Math.min(((step + 1) / 4) * 100, 100);

  const stepsBreadcrumbs = [
    "Cadastro & Unidade",
    "Necessidade Principal",
    "Detalhamento Clínico",
    "Plano Pronto"
  ];

  return (
    <section id="diagnostico" className="py-24 bg-[#E8E4DD] relative">
      <div className="absolute top-[30%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-[#F1EEE8]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-[#163A5F]/5 blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header Titles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-10"
          id="smartform_titles"
        >
          <span className="text-xs font-semibold tracking-widest text-[#163A5F] uppercase block mb-3 font-sans">
            Orientação sem Compromisso
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1E1E] tracking-tight font-medium">
            Diagnóstico Assistido por Questionário
          </h2>
          <p className="mt-3 font-sans text-xs sm:text-sm text-[#1E1E1E]/70 max-w-xl mx-auto">
            Descubra em menos de 1 minuto quais as técnicas ideias recomendadas para o seu caso. O preenchimento agiliza o direcionamento com a Dra. Iara.
          </p>
        </motion.div>

        {/* Wizard Panel Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="bg-[#F1EEE8] rounded-[2rem] border border-white/60 shadow-xl overflow-hidden"
          id="smartform_box"
        >
          
          {/* Progress Header */}
          <div className="bg-white/80 px-6 sm:px-8 py-5 border-b border-[#E8E4DD] flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs font-semibold tracking-wide text-[#1E1E1E]/60 uppercase font-sans">
              <span>Etapa {step + 1} de 4</span>
              <span className="text-[#163A5F]">{stepsBreadcrumbs[step]}</span>
            </div>
            
            {/* Real aesthetic progress bar */}
            <div className="w-full bg-[#E8E4DD] h-2 rounded-full overflow-hidden">
              <div 
                className="bg-[#163A5F] h-full transition-all duration-500 ease-out rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <div className="p-6 sm:p-10">
            {loading ? (
              /* High quality clinical diagnostic loading state */
              <div className="py-12 flex flex-col items-center justify-center space-y-6 text-center" id="smartform_loading">
                <div className="relative">
                  <span className="absolute inline-flex h-14 w-14 rounded-full bg-[#163A5F]/15 animate-ping" />
                  <div className="w-14 h-14 rounded-full bg-[#163A5F]/10 text-[#163A5F] flex items-center justify-center">
                    <Activity className="w-7 h-7 animate-pulse stroke-[2px]" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-serif text-lg font-bold text-[#163A5F]">Analisando as Respostas...</h4>
                  <p className="font-sans text-xs sm:text-sm text-[#1E1E1E]/60 max-w-sm">
                    Aguarde um instante. Nosso sistema está estruturando seus dados para prever o plano cicatricial correspondente.
                  </p>
                </div>
              </div>
            ) : (
              <AnimatePresence mode="wait">
                
                {/* ETAPA 0: Cadastro cadastral e unidade */}
                {step === 0 && (
                  <motion.div
                    key="step_0"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6"
                    id="smartform_step_0"
                  >
                    <div className="space-y-1">
                      <h3 className="font-serif text-lg font-semibold text-[#163A5F]">Para começarmos, conte-nos quem é você:</h3>
                      <p className="text-xs text-[#1E1E1E]/60 font-sans">Preencha seus dados para habilitar o questionário.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name field */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-[#1E1E1E]/75 font-sans flex items-center space-x-1">
                          <User size={12} className="text-[#163A5F]" />
                          <span>Seu Nome Completo *</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Ex: Amanda Salles"
                            value={formData.nome}
                            onChange={(e) => handleTextChange("nome", e.target.value)}
                            className="w-full bg-white border border-[#E8E4DD] rounded-xl px-4 py-3.5 text-sm text-[#1E1E1E] focus:outline-none focus:border-[#163A5F] font-sans"
                            id="form_input_nome"
                          />
                        </div>
                      </div>

                      {/* Phone field */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-[#1E1E1E]/75 font-sans flex items-center space-x-1">
                          <Phone size={12} className="text-[#163A5F]" />
                          <span>WhatsApp para Retorno *</span>
                        </label>
                        <input
                          type="tel"
                          placeholder="Ex: (47) 99999-1234"
                          value={formData.telefone}
                          onChange={handlePhoneChange}
                          className="w-full bg-white border border-[#E8E4DD] rounded-xl px-4 py-3.5 text-sm text-[#1E1E1E] focus:outline-none focus:border-[#163A5F] font-sans"
                          id="form_input_telefone"
                        />
                      </div>

                      {/* City Dropdown Selection */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-[#1E1E1E]/75 font-sans flex items-center space-x-1">
                          <MapPin size={12} className="text-[#163A5F]" />
                          <span>Onde prefere ser atendido? *</span>
                        </label>
                        <select
                          value={formData.cidade}
                          onChange={(e) => handleTextChange("cidade", e.target.value)}
                          className="w-full bg-white border border-[#E8E4DD] rounded-xl px-4 py-3.5 text-sm text-[#1E1E1E] focus:outline-none focus:border-[#163A5F] font-sans cursor-pointer"
                          id="form_select_cidade"
                        >
                          <option value="">Selecione uma Unidade...</option>
                          <option value="Balneário Camboriú">Balneário Camboriú</option>
                          <option value="Bombinhas">Bombinhas</option>
                          <option value="Tijucas">Tijucas</option>
                        </select>
                      </div>

                      {/* Treatment of interest dropdown selection */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-[#1E1E1E]/75 font-sans flex items-center space-x-1">
                          <Stethoscope size={12} className="text-[#163A5F]" />
                          <span>Procedimento de Interesse *</span>
                        </label>
                        <select
                          value={formData.procedimento}
                          onChange={(e) => handleTextChange("procedimento", e.target.value)}
                          className="w-full bg-white border border-[#E8E4DD] rounded-xl px-4 py-3.5 text-sm text-[#1E1E1E] focus:outline-none focus:border-[#163A5F] font-sans cursor-pointer"
                          id="form_select_procedimento"
                        >
                          <option value="">Selecione um Procedimento...</option>
                          <option value="Implantes Dentários">Implantes Dentários</option>
                          <option value="Prótese sobre Implante">Prótese sobre Implantes</option>
                          <option value="Cirurgia Oral Menor">Cirurgia Oral Menor</option>
                          <option value="Reabilitação Oral">Reabilitação Oral</option>
                          <option value="Análise / Avaliação Especializada">Avaliação Especializada</option>
                        </select>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* ETAPA 1: Pergunta dinâmica principal */}
                {step === 1 && (
                  <motion.div
                    key="step_1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-5"
                    id="smartform_step_1"
                  >
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-[#163A5F] uppercase tracking-widest font-sans">Identificação de Cenário</span>
                      <h3 className="font-serif text-lg sm:text-xl font-medium text-[#1E1E1E]">
                        Qual sua principal necessidade hoje?
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 gap-3.5 pt-2" id="necessity_options_grid">
                      {[
                        "Perdi um dente",
                        "Preciso trocar prótese",
                        "Quero melhorar minha mastigação",
                        "Desejo recuperar meu sorriso"
                      ].map((option) => {
                        const isChosen = formData.necessidade === option;
                        return (
                          <button
                            key={option}
                            onClick={() => handleTextChange("necessidade", option)}
                            className={`w-full text-left p-4.5 rounded-2xl border transition-all cursor-pointer font-sans text-sm font-semibold flex items-center justify-between ${
                              isChosen
                                ? "bg-[#163A5F]/10 border-[#163A5F] text-[#163A5F]"
                                : "bg-white border-[#E8E4DD] text-[#1E1E1E]/80 hover:bg-[#E8E4DD]/40"
                            }`}
                            id={`opt_need_${option.replace(/\s+/g, '_')}`}
                          >
                            <span>{option}</span>
                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                              isChosen ? "border-[#163A5F] bg-[#163A5F]" : "border-gray-300"
                            }`}>
                              {isChosen && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* ETAPA 2: Pergunta complementar dinâmica */}
                {step === 2 && (
                  <motion.div
                    key="step_2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-5"
                    id="smartform_step_2"
                  >
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-[#163A5F] uppercase tracking-widest font-sans">Aprofundamento Clínico</span>
                      <h3 className="font-serif text-lg sm:text-xl font-medium text-[#1E1E1E]">
                        {getComplementaryQuestion().title}
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 gap-3.5 pt-2" id="complementary_options_grid">
                      {getComplementaryQuestion().options.map((option) => {
                        const isChosen = formData.respostaComplementar === option;
                        return (
                          <button
                            key={option}
                            onClick={() => handleTextChange("respostaComplementar", option)}
                            className={`w-full text-left p-4.5 rounded-2xl border transition-all cursor-pointer font-sans text-sm font-semibold flex items-center justify-between ${
                              isChosen
                                ? "bg-[#163A5F]/10 border-[#163A5F] text-[#163A5F]"
                                : "bg-white border-[#E8E4DD] text-[#1E1E1E]/85 hover:bg-[#E8E4DD]/40"
                            }`}
                            id={`opt_comp_${option.substring(0, 15).replace(/\s+/g, '_')}`}
                          >
                            <span className="pr-4 leading-relaxed">{option}</span>
                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                              isChosen ? "border-[#163A5F] bg-[#163A5F]" : "border-gray-300"
                            }`}>
                              {isChosen && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* ETAPA 3: Sucesso e redirecionamento de WhatsApp estruturado */}
                {step === 3 && (
                  <motion.div
                    key="step_3"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-6"
                    id="smartform_step_3"
                  >
                    <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto shadow-xs">
                      <CheckCircle className="w-8 h-8 stroke-[2.5px]" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1E1E1E]">
                        Análise Concluída com Sucesso!
                      </h3>
                      <p className="font-sans text-sm text-[#1E1E1E]/70 max-w-md mx-auto leading-relaxed">
                        Excelente, <strong>{formData.nome.split(" ")[0]}</strong>! Estruturamos os detalhes sobre sua necessidade de <em>"{formData.necessidade}"</em> nas nossas clínicas parceiras em <strong>{formData.cidade}</strong>.
                      </p>
                    </div>

                    {/* Short checklist preview card of what is sent */}
                    <div className="border border-[#E8E4DD] bg-white p-5 rounded-2xl text-left text-xs space-y-2.5 max-w-md mx-auto font-sans shadow-xs">
                      <span className="font-bold uppercase tracking-wider text-[#163A5F] block pb-1.5 border-b border-[#E8E4DD] flex items-center justify-between">
                        <span>Resumo do seu Direcionamento</span>
                        <FileText size={12} />
                      </span>
                      <div className="flex justify-between">
                        <span className="text-[#1E1E1E]/60">Destino de Atendimento:</span>
                        <strong className="text-[#1E1E1E]">{formData.cidade}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#1E1E1E]/60">Interesse Primário:</span>
                        <strong className="text-[#1E1E1E]">{formData.procedimento}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#1E1E1E]/60">Queixa Identificada:</span>
                        <strong className="text-[#1E1E1E]">{formData.respostaComplementar.substring(0, 36)}...</strong>
                      </div>
                    </div>

                    {/* Big Action Whatsapp routing button */}
                    <div className="pt-4 max-w-md mx-auto">
                      <button
                        onClick={handleSubmitWhatsApp}
                        className="w-full flex items-center justify-center space-x-3 bg-[#163A5F] hover:bg-[#0F2B47] text-white py-4 px-6 rounded-full text-sm font-semibold uppercase tracking-wider transition-all shadow-md hover:shadow-xl transform hover:scale-[1.01]"
                        id="smartform_whatsapp_btn"
                      >
                        <MessageCircle size={20} className="fill-white/10" />
                        <span>Receber Atendimento Personalizado</span>
                      </button>
                      <p className="text-[10px] sm:text-xs text-[#1E1E1E]/50 mt-3">
                        Clicando, você será levado ao WhatsApp oficial para receber o parecer do suporte clínico.
                      </p>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            )}

            {/* Error alerts message */}
            {errorMsg && (
              <div className="mt-4 p-3.5 bg-red-50 rounded-xl border border-red-100 text-xs font-semibold text-red-700 text-center font-sans">
                {errorMsg}
              </div>
            )}
          </div>

          {/* Action Row panel buttons (only visible for steps 0, 1, 2) */}
          {step < 3 && !loading && (
            <div className="bg-white/80 px-6 sm:px-8 py-5 border-t border-[#E8E4DD] flex items-center justify-between" id="smartform_footer_nav">
              {/* Back Button */}
              {step > 0 ? (
                <button
                  onClick={handleBack}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-[#1e1e1e]/60 hover:text-[#1e1e1e] transition-colors cursor-pointer font-sans"
                  id="smartform_back_btn"
                >
                  <ArrowLeft size={14} />
                  <span>Voltar</span>
                </button>
              ) : (
                <div /> // alignment spacing dummy
              )}

              {/* Next Button */}
              <button
                onClick={handleNext}
                disabled={!canGoNext()}
                className={`inline-flex items-center space-x-1.5 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer font-sans ${
                  canGoNext()
                    ? "bg-[#163A5F] text-white hover:bg-[#0F2B47] shadow-xs"
                    : "bg-[#E8E4DD] text-[#1E1E1E]/30 cursor-not-allowed"
                }`}
                id="smartform_next_btn"
              >
                <span>{step === 2 ? "Concluir" : "Próximo"}</span>
                <ArrowRight size={14} />
              </button>
            </div>
          )}

        </motion.div>

      </div>
    </section>
  );
}
