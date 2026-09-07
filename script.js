(function(){
  var translations = {
    pt: {
      "topbar.whats":"Agendar pelo WhatsApp: (48) 99609-4127",
      "brand.tagline":"Cultive seu bem-estar",
      "nav.services":"Serviços","nav.about":"Sobre","nav.prices":"Valores","nav.location":"Localização","nav.contact":"Contato","nav.book":"Agendar",
      "hero.eyebrow":"Centro Holístico Equilibra · Ingleses, Florianópolis",
      "hero.line1":"Dor não é normal.","hero.line2":"Bem-estar","hero.line3":"é escolha.",
      "hero.lead":"Sessões de massoterapia e terapias holísticas para aliviar dores, reduzir o estresse e devolver o equilíbrio entre corpo, mente e alma.",
      "hero.cta":"Agendar sessão no WhatsApp","hero.cta2":"Ver serviços",
      "relief.title":"Alívio para",
      "relief.1":"Dores nas costas","relief.2":"Cervical e ombros","relief.3":"Tensão e estresse","relief.4":"Fadiga muscular",
      "relief.5":"Má postura","relief.6":"Ansiedade e insônia","relief.7":"Cansaço físico e mental","relief.8":"Desequilíbrios emocionais",
      "services.eyebrow":"O que oferecemos","services.title":"Terapias para o corpo, a mente e a alma",
      "svc.terapeutica.t":"Massagem Terapêutica","svc.terapeutica.d":"Técnicas manuais focadas em aliviar dores específicas e devolver a mobilidade.",
      "svc.relaxante.t":"Massagem Relaxante","svc.relaxante.d":"Movimentos suaves que reduzem o estresse, a ansiedade e melhoram o sono.",
      "svc.pedras.t":"Massagem com Pedras Quentes","svc.pedras.d":"Calor terapêutico que relaxa profundamente a musculatura.",
      "svc.reab.t":"Reabilitação Física","svc.reab.d":"Acompanhamento na recuperação muscular e postural.",
      "svc.drenagem.t":"Drenagem Linfática Manual","svc.drenagem.d":"Estimula a circulação e reduz a retenção de líquidos.",
      "svc.desportiva.t":"Massagem Desportiva","svc.desportiva.d":"Preparação e recuperação muscular para quem pratica atividade física.",
      "svc.reflexologia.t":"Reflexologia","svc.reflexologia.d":"Estímulo de pontos nos pés que promovem o equilíbrio de todo o corpo.",
      "svc.shiatsu.t":"Shiatsu","svc.shiatsu.d":"Pressão nos meridianos de energia para reequilibrar corpo e mente.",
      "svc.reiki.t":"Reiki","svc.reiki.d":"Terapia energética que ajuda a liberar bloqueios emocionais.",
      "svc.yoga.t":"Yoga","svc.yoga.d":"Práticas de respiração e movimento para a conexão entre corpo e mente.",
      "svc.personal.t":"Personal Training","svc.personal.d":"Treinos personalizados para fortalecer o corpo com segurança.",
      "svc.holistico.t":"Terapeuta Holístico","svc.holistico.d":"Um olhar completo: tratamos o sintoma físico e a causa emocional.",
      "about.eyebrow":"Sobre o terapeuta","about.title":"Jorge Buenaventura",
      "about.p1":"Terapeuta holístico especializado em massoterapia, shiatsu e reflexologia, dedicado a cuidar de cada pessoa de forma completa — corpo, mente e alma.",
      "about.p2":"Na Equilibra acreditamos que dor não é normal e que o bem-estar é uma escolha diária. Por isso, trabalhamos não só as dores e tensões musculares, mas também o estresse, a ansiedade e os desequilíbrios emocionais que afetam a qualidade de vida.",
      "about.p3":"Cada sessão é pensada para renovar suas energias e ajudar você a reencontrar o seu equilíbrio.",
      "pricing.eyebrow":"Investimento","pricing.title":"Sessões e valores",
      "pricing.d30":"30 minutos","pricing.n30":"Ideal para focar em uma região específica",
      "pricing.d60":"1 hora","pricing.n60":"Sessão completa para relaxamento e alívio",
      "pricing.cta":"Agendar","pricing.hint":"Horários e disponibilidade combinados diretamente pelo WhatsApp.",
      "location.eyebrow":"Onde estamos","location.title":"Ingleses, Florianópolis",
      "location.address":"Servidão Atobá, 222 — Ingleses do Rio Vermelho, Florianópolis/SC",
      "final.title":"Cuide do seu corpo. Transforme sua vida.","final.lead":"Você merece esse cuidado. Fale agora e agende sua sessão.","final.cta":"Agendar pelo WhatsApp",
      "footer.rights":"Todos os direitos reservados."
    },
    es: {
      "topbar.whats":"Agendar por WhatsApp: (48) 99609-4127",
      "brand.tagline":"Cultiva tu bienestar",
      "nav.services":"Servicios","nav.about":"Sobre nosotros","nav.prices":"Precios","nav.location":"Ubicación","nav.contact":"Contacto","nav.book":"Agendar",
      "hero.eyebrow":"Centro Holístico Equilibra · Ingleses, Florianópolis",
      "hero.line1":"El dolor no es normal.","hero.line2":"El bienestar","hero.line3":"es una elección.",
      "hero.lead":"Sesiones de masoterapia y terapias holísticas para aliviar dolores, reducir el estrés y recuperar el equilibrio entre cuerpo, mente y alma.",
      "hero.cta":"Agendar sesión por WhatsApp","hero.cta2":"Ver servicios",
      "relief.title":"Alivio para",
      "relief.1":"Dolores de espalda","relief.2":"Cervicales y hombros","relief.3":"Tensión y estrés","relief.4":"Fatiga muscular",
      "relief.5":"Mala postura","relief.6":"Ansiedad e insomnio","relief.7":"Cansancio físico y mental","relief.8":"Desequilibrios emocionales",
      "services.eyebrow":"Qué ofrecemos","services.title":"Terapias para el cuerpo, la mente y el alma",
      "svc.terapeutica.t":"Masaje Terapéutico","svc.terapeutica.d":"Técnicas manuales enfocadas en aliviar dolores específicos y recuperar la movilidad.",
      "svc.relaxante.t":"Masaje Relajante","svc.relaxante.d":"Movimientos suaves que reducen el estrés, la ansiedad y mejoran el sueño.",
      "svc.pedras.t":"Masaje con Piedras Calientes","svc.pedras.d":"Calor terapéutico que relaja profundamente la musculatura.",
      "svc.reab.t":"Rehabilitación Física","svc.reab.d":"Acompañamiento en la recuperación muscular y postural.",
      "svc.drenagem.t":"Drenaje Linfático Manual","svc.drenagem.d":"Estimula la circulación y reduce la retención de líquidos.",
      "svc.desportiva.t":"Masaje Deportivo","svc.desportiva.d":"Preparación y recuperación muscular para quienes practican actividad física.",
      "svc.reflexologia.t":"Reflexología","svc.reflexologia.d":"Estímulo de puntos en los pies que promueven el equilibrio de todo el cuerpo.",
      "svc.shiatsu.t":"Shiatsu","svc.shiatsu.d":"Presión en los meridianos de energía para reequilibrar cuerpo y mente.",
      "svc.reiki.t":"Reiki","svc.reiki.d":"Terapia energética que ayuda a liberar bloqueos emocionales.",
      "svc.yoga.t":"Yoga","svc.yoga.d":"Prácticas de respiración y movimiento para la conexión entre cuerpo y mente.",
      "svc.personal.t":"Entrenamiento Personal","svc.personal.d":"Entrenamientos personalizados para fortalecer el cuerpo con seguridad.",
      "svc.holistico.t":"Terapeuta Holístico","svc.holistico.d":"Una mirada completa: tratamos el síntoma físico y la causa emocional.",
      "about.eyebrow":"Sobre el terapeuta","about.title":"Jorge Buenaventura",
      "about.p1":"Terapeuta holístico especializado en masoterapia, shiatsu y reflexología, dedicado a cuidar a cada persona de forma completa — cuerpo, mente y alma.",
      "about.p2":"En Equilibra creemos que el dolor no es normal y que el bienestar es una elección diaria. Por eso trabajamos no solo los dolores y tensiones musculares, sino también el estrés, la ansiedad y los desequilibrios emocionales que afectan la calidad de vida.",
      "about.p3":"Cada sesión está pensada para renovar tus energías y ayudarte a reencontrar tu equilibrio.",
      "pricing.eyebrow":"Inversión","pricing.title":"Sesiones y precios",
      "pricing.d30":"30 minutos","pricing.n30":"Ideal para enfocarse en una zona específica",
      "pricing.d60":"1 hora","pricing.n60":"Sesión completa para relajación y alivio",
      "pricing.cta":"Agendar","pricing.hint":"Horarios y disponibilidad se coordinan directamente por WhatsApp.",
      "location.eyebrow":"Dónde estamos","location.title":"Ingleses, Florianópolis",
      "location.address":"Servidão Atobá, 222 — Ingleses do Rio Vermelho, Florianópolis/SC",
      "final.title":"Cuida tu cuerpo. Transforma tu vida.","final.lead":"Te merecés ese cuidado. Escribinos ahora y agendá tu sesión.","final.cta":"Agendar por WhatsApp",
      "footer.rights":"Todos los derechos reservados."
    },
    en: {
      "topbar.whats":"Book on WhatsApp: (48) 99609-4127",
      "brand.tagline":"Cultivate your well-being",
      "nav.services":"Services","nav.about":"About","nav.prices":"Pricing","nav.location":"Location","nav.contact":"Contact","nav.book":"Book now",
      "hero.eyebrow":"Centro Holístico Equilibra · Ingleses, Florianópolis",
      "hero.line1":"Pain isn't normal.","hero.line2":"Well-being","hero.line3":"is a choice.",
      "hero.lead":"Massage therapy and holistic sessions to relieve pain, reduce stress and restore balance between body, mind and soul.",
      "hero.cta":"Book a session on WhatsApp","hero.cta2":"See services",
      "relief.title":"Relief for",
      "relief.1":"Back pain","relief.2":"Neck and shoulders","relief.3":"Tension and stress","relief.4":"Muscle fatigue",
      "relief.5":"Poor posture","relief.6":"Anxiety and insomnia","relief.7":"Physical and mental exhaustion","relief.8":"Emotional imbalance",
      "services.eyebrow":"What we offer","services.title":"Therapies for body, mind and soul",
      "svc.terapeutica.t":"Therapeutic Massage","svc.terapeutica.d":"Hands-on techniques focused on relieving specific pain and restoring mobility.",
      "svc.relaxante.t":"Relaxing Massage","svc.relaxante.d":"Gentle movements that reduce stress, ease anxiety and improve sleep.",
      "svc.pedras.t":"Hot Stone Massage","svc.pedras.d":"Therapeutic heat that deeply relaxes the muscles.",
      "svc.reab.t":"Physical Rehabilitation","svc.reab.d":"Support for muscular and postural recovery.",
      "svc.drenagem.t":"Manual Lymphatic Drainage","svc.drenagem.d":"Stimulates circulation and reduces fluid retention.",
      "svc.desportiva.t":"Sports Massage","svc.desportiva.d":"Muscle preparation and recovery for active people.",
      "svc.reflexologia.t":"Reflexology","svc.reflexologia.d":"Stimulating foot points that promote balance throughout the body.",
      "svc.shiatsu.t":"Shiatsu","svc.shiatsu.d":"Pressure on energy meridians to rebalance body and mind.",
      "svc.reiki.t":"Reiki","svc.reiki.d":"Energy therapy that helps release emotional blockages.",
      "svc.yoga.t":"Yoga","svc.yoga.d":"Breathing and movement practices connecting body and mind.",
      "svc.personal.t":"Personal Training","svc.personal.d":"Personalized training to safely strengthen the body.",
      "svc.holistico.t":"Holistic Therapist","svc.holistico.d":"A complete view: we treat the physical symptom and its emotional cause.",
      "about.eyebrow":"About the therapist","about.title":"Jorge Buenaventura",
      "about.p1":"Holistic therapist specialized in massage therapy, shiatsu and reflexology, dedicated to caring for each person completely — body, mind and soul.",
      "about.p2":"At Equilibra we believe pain isn't normal and that well-being is a daily choice. That's why we work not only on pain and muscle tension, but also on the stress, anxiety and emotional imbalances that affect quality of life.",
      "about.p3":"Every session is designed to renew your energy and help you find your balance again.",
      "pricing.eyebrow":"Investment","pricing.title":"Sessions and pricing",
      "pricing.d30":"30 minutes","pricing.n30":"Ideal to focus on one specific area",
      "pricing.d60":"1 hour","pricing.n60":"Full session for relaxation and relief",
      "pricing.cta":"Book now","pricing.hint":"Times and availability are arranged directly on WhatsApp.",
      "location.eyebrow":"Where we are","location.title":"Ingleses, Florianópolis",
      "location.address":"Servidão Atobá, 222 — Ingleses do Rio Vermelho, Florianópolis, Brazil",
      "final.title":"Take care of your body. Transform your life.","final.lead":"You deserve this care. Message us now and book your session.","final.cta":"Book on WhatsApp",
      "footer.rights":"All rights reserved."
    }
  };

  var STORAGE_KEY = "equilibra-lang";

  function applyLang(lang){
    var dict = translations[lang] || translations.pt;
    document.documentElement.setAttribute("lang", lang === "pt" ? "pt-BR" : lang);
    document.querySelectorAll("[data-i18n]").forEach(function(el){
      var key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });
    document.querySelectorAll(".lang-btn").forEach(function(btn){
      btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
    });
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function initLang(){
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    var lang = saved || "pt";
    applyLang(lang);
    document.querySelectorAll(".lang-btn").forEach(function(btn){
      btn.addEventListener("click", function(){ applyLang(btn.getAttribute("data-lang")); });
    });
  }

  function initNav(){
    var toggle = document.getElementById("navToggle");
    var nav = document.getElementById("nav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", function(){
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function(link){
      link.addEventListener("click", function(){
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function(){
    initLang();
    initNav();
    var yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  });
})();
