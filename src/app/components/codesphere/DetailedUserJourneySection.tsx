"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { 
  Sparkles, 
  MessageSquare, 
  Code2, 
  Terminal, 
  Play, 
  CheckCircle,
  Lightbulb,
  Zap,
  Bot,
} from "lucide-react";
import { Button } from "../ui/button";

const journeySteps = [
  {
    id: "start",
    title: "Créer un projet",
    description: "Lance ton projet en quelques secondes",
    icon: Sparkles,
    color: "#5AB1FF"
  },
  {
    id: "code",
    title: "Coder avec l'IA",
    description: "L'assistant IA t'aide à écrire du code",
    icon: Bot,
    color: "#7B9FFF"
  },
  {
    id: "assist",
    title: "Assistance intelligente",
    description: "Pose des questions, obtiens des réponses",
    icon: MessageSquare,
    color: "#9B8FFF"
  },
  {
    id: "deploy",
    title: "Tester & Déployer",
    description: "Visualise et déploie ton application",
    icon: Play,
    color: "#B77BFF"
  }
];

export function DetailedUserJourneySection() {
  const [activeStep, setActiveStep] = useState("start");

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0E] via-[#0D0D14] to-[#0A0A0E]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#7B9FFF]/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#5AB1FF]/30 bg-[#5AB1FF]/10 backdrop-blur-sm mb-6">
            <Lightbulb className="w-4 h-4 text-[#5AB1FF]" />
            <span className="text-sm text-[#5AB1FF]">Découvrir le parcours</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl text-white mb-6" style={{ fontWeight: 700 }}>
            De l&apos;idée au code,{" "}
            <span style={{
              background: 'linear-gradient(135deg, #5AB1FF 0%, #B77BFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              avec l&apos;IA à tes côtés
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Découvre comment CodeSphere et son assistant IA révolutionnent ton workflow de développement
          </p>
        </motion.div>
        <Tabs value={activeStep} onValueChange={setActiveStep} className="w-full">
          {/* Navigation */}
          <TabsList className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-transparent h-auto mb-12">
            {journeySteps.map((step) => (
              <TabsTrigger
                key={step.id}
                value={step.id}
                className="data-[state=active]:bg-white/10 border border-white/10 data-[state=active]:border-white/20 rounded-xl p-4 h-auto flex flex-col items-start gap-2 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-3 w-full">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ 
                      backgroundColor: `${step.color}20`,
                      boxShadow: activeStep === step.id ? `0 0 20px ${step.color}40` : 'none'
                    }}
                  >
                    <step.icon 
                      className="w-5 h-5" 
                      style={{ color: step.color }}
                    />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-sm text-white">{step.title}</div>
                    <div className="text-xs text-gray-500">{step.description}</div>
                  </div>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Content */}
          <AnimatePresence mode="wait">
            {activeStep === "start" && (
              <TabsContent key="start" value="start" className="mt-0">
                <StartProjectDemo />
              </TabsContent>
            )}
            {activeStep === "code" && (
              <TabsContent key="code" value="code" className="mt-0">
                <AICodeAssistDemo />
              </TabsContent>
            )}
            {activeStep === "assist" && (
              <TabsContent key="assist" value="assist" className="mt-0">
                <AIConversationDemo />
              </TabsContent>
            )}
            {activeStep === "deploy" && (
              <TabsContent key="deploy" value="deploy" className="mt-0">
                <DeployDemo />
              </TabsContent>
            )}
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  );
}

// Demo 1: Start Project
function StartProjectDemo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="grid lg:grid-cols-2 gap-8 items-center"
    >
      <div className="space-y-6">
        <h3 className="text-3xl text-white" style={{ fontWeight: 700 }}>
          Démarre ton projet en un clic
        </h3>
        <p className="text-lg text-gray-400 leading-relaxed">
          Plus besoin de configurer Node.js, d&apos;installer des dépendances ou de setup un environnement. 
          CodeSphere génère automatiquement la structure de ton projet.
        </p>
        <ul className="space-y-3">
          {[
            "Choisis ton template (React, Vue, Next.js...)",
            "L'environnement se configure automatiquement",
            "Démarre le coding en moins de 10 secondes"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#5AB1FF] flex-shrink-0 mt-0.5" />
              <span className="text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-[#5AB1FF]/20 rounded-2xl blur-2xl"></div>
        <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black/60 backdrop-blur-xl shadow-2xl">
          <div className="p-4 border-b border-white/10 bg-white/5">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#5AB1FF]" />
              <span className="text-sm text-gray-300">Nouveau Projet</span>
            </div>
          </div>
          <div className="p-8 space-y-6">
            <div className="space-y-3">
              <label className="text-sm text-gray-400">Nom du projet</label>
              <div className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white">
                mon-app-react
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-sm text-gray-400">Template</label>
              <div className="grid grid-cols-2 gap-3">
                {["React", "Vue", "Next.js", "Vite"].map((template) => (
                  <div
                    key={template}
                    className={`px-4 py-3 rounded-lg border text-center transition-all ${
                      template === "React"
                        ? "border-[#5AB1FF] bg-[#5AB1FF]/10 text-[#5AB1FF]"
                        : "border-white/10 bg-white/5 text-gray-400 hover:border-white/20"
                    }`}
                  >
                    {template}
                  </div>
                ))}
              </div>
            </div>
            <Button
              className="w-full py-6"
              style={{
                background: 'linear-gradient(135deg, #5AB1FF 0%, #B77BFF 100%)',
                boxShadow: '0 0 30px rgba(90, 177, 255, 0.3)'
              }}
            >
              <Zap className="w-5 h-5 mr-2" />
              Créer le projet
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Demo 2: AI Code Assist
function AICodeAssistDemo() {
  const [showSuggestion, setShowSuggestion] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="grid lg:grid-cols-2 gap-8 items-center"
    >
      <div className="space-y-6 order-2 lg:order-1">
        <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black/60 backdrop-blur-xl shadow-2xl">
          <div className="p-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-[#5AB1FF]" />
              <span className="text-sm text-gray-300">App.tsx</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-xs text-[#5AB1FF] hover:bg-[#5AB1FF]/10"
              onClick={() => setShowSuggestion(!showSuggestion)}
            >
              <Bot className="w-3 h-3 mr-1" />
              AI Assist
            </Button>
          </div>
          <div className="p-6 font-mono text-sm space-y-2">
            <div className="text-purple-400">import <span className="text-blue-300">React</span> from &apos;react&apos;;</div>
            <div className="text-purple-400">import <span className="text-blue-300">{'{ useState }'}</span> from &apos;react&apos;;</div>
            <div className="h-4"></div>
            <div className="text-purple-400">function <span className="text-yellow-300">Counter</span>() {'{'}</div>
            <div className="pl-4 text-gray-400">{'// Je veux un compteur avec des boutons +/-'}</div>
            <div className="pl-4 text-gray-600">|</div>
            
            <AnimatePresence>
              {showSuggestion && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="ml-4 p-3 rounded-lg bg-gradient-to-br from-[#5AB1FF]/20 to-[#B77BFF]/20 border border-[#5AB1FF]/30"
                >
                  <div className="flex items-start gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-[#5AB1FF] flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-[#5AB1FF]">Suggestion IA</span>
                  </div>
                  <div className="space-y-1 text-xs">
                    <div className="text-blue-300">const [count, setCount] = useState(0);</div>
                    <div className="text-gray-400">return (</div>
                    <div className="pl-2 text-gray-300">{'<div>'}</div>
                    <div className="pl-4 text-gray-300">{'<button onClick={() => setCount(count - 1)}>-</button>'}</div>
                    <div className="pl-4 text-gray-300">{'<span>{count}</span>'}</div>
                    <div className="pl-4 text-gray-300">{'<button onClick={() => setCount(count + 1)}>+</button>'}</div>
                    <div className="pl-2 text-gray-300">{'</div>'}</div>
                    <div className="text-gray-400">);</div>
                  </div>
                  <Button
                    size="sm"
                    className="mt-3 w-full text-xs"
                    style={{
                      background: 'linear-gradient(135deg, #5AB1FF 0%, #B77BFF 100%)'
                    }}
                  >
                    Accepter la suggestion
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
            
            <div className="text-white">{'}'}</div>
          </div>
        </div>
      </div>
      <div className="space-y-6 order-1 lg:order-2">
        <h3 className="text-3xl text-white" style={{ fontWeight: 700 }}>
          L&apos;IA comprend ton code et te suggère des solutions
        </h3>
        <p className="text-lg text-gray-400 leading-relaxed">
          L&apos;assistant IA analyse ton code en temps réel et propose des suggestions contextuelles. 
          Écris un commentaire sur ce que tu veux faire, et l&apos;IA génère le code pour toi.
        </p>
        <ul className="space-y-3">
          {[
            "Autocomplétion intelligente basée sur le contexte",
            "Génération de code à partir de commentaires",
            "Correction automatique des erreurs",
            "Suggestions d'optimisation"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[#7B9FFF] flex-shrink-0 mt-0.5" />
              <span className="text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

// Demo 3: AI Conversation
function AIConversationDemo() {
  const messages = [
    {
      role: "user",
      content: "Comment je peux ajouter une API REST à mon projet React ?",
      time: "Il y a 2 min"
    },
    {
      role: "ai",
      content: "Pour ajouter une API REST à ton projet React, je te recommande d'utiliser `fetch` ou `axios`. Voici un exemple avec fetch :",
      code: `// Dans un fichier api.ts
export async function fetchUsers() {
  const response = await fetch('/api/users');
  return response.json();
}

// Dans ton composant
const [users, setUsers] = useState([]);
useEffect(() => {
  fetchUsers().then(setUsers);
}, []);`,
      time: "Il y a 2 min"
    },
    {
      role: "user",
      content: "Et pour gérer les erreurs ?",
      time: "Il y a 1 min"
    },
    {
      role: "ai",
      content: "Excellente question ! Voici comment gérer les erreurs proprement avec try/catch :",
      code: `try {
  const data = await fetchUsers();
  setUsers(data);
} catch (error) {
  console.error('Erreur:', error);
  setError('Impossible de charger les utilisateurs');
}`,
      time: "Il y a 1 min"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="grid lg:grid-cols-2 gap-8 items-start"
    >
      <div className="space-y-6">
        <h3 className="text-3xl text-white" style={{ fontWeight: 700 }}>
          Pose tes questions, obtiens des réponses instantanées
        </h3>
        <p className="text-lg text-gray-400 leading-relaxed">
          L&apos;assistant IA fonctionne comme ChatGPT, mais avec un contexte complet sur ton projet. 
          Il connaît ton code, ta stack, et peut t&apos;aider à résoudre n&apos;importe quel problème.
        </p>
        <ul className="space-y-3">
          {[
            "Explications de code détaillées",
            "Debugging et résolution d'erreurs",
            "Conseils sur les best practices",
            "Génération de tests unitaires"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <MessageSquare className="w-5 h-5 text-[#9B8FFF] flex-shrink-0 mt-0.5" />
              <span className="text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-[#9B8FFF]/20 rounded-2xl blur-2xl"></div>
        <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black/60 backdrop-blur-xl shadow-2xl h-[600px] flex flex-col">
          <div className="p-4 border-b border-white/10 bg-white/5 flex items-center gap-2">
            <Bot className="w-4 h-4 text-[#9B8FFF]" />
            <span className="text-sm text-gray-300">Assistant IA</span>
            <div className="ml-auto">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[85%] ${message.role === 'user' ? 'order-2' : 'order-1'}`}>
                  <div className={`rounded-2xl p-4 ${
                    message.role === 'user'
                      ? 'bg-gradient-to-br from-[#5AB1FF] to-[#7B9FFF]'
                      : 'bg-white/5 border border-white/10'
                  }`}>
                    <p className="text-sm text-white leading-relaxed">{message.content}</p>
                    {message.code && (
                      <div className="mt-3 p-3 rounded-lg bg-black/40 font-mono text-xs text-gray-300 overflow-x-auto">
                        <pre>{message.code}</pre>
                      </div>
                    )}
                  </div>
                  <div className="mt-1 px-2 text-xs text-gray-500">
                    {message.time}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="p-4 border-t border-white/10 bg-white/5">
            <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-white/5 border border-white/10">
              <input
                type="text"
                placeholder="Pose une question à l'IA..."
                className="flex-1 bg-transparent text-sm text-white placeholder:text-gray-500 outline-none"
              />
              <Sparkles className="w-4 h-4 text-[#9B8FFF]" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Demo 4: Deploy
function DeployDemo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="grid lg:grid-cols-2 gap-8 items-center"
    >
      <div className="space-y-6 order-2 lg:order-1">
        <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black/60 backdrop-blur-xl shadow-2xl">
          <div className="p-4 border-b border-white/10 bg-white/5">
            <div className="flex items-center gap-2">
              <Play className="w-4 h-4 text-[#B77BFF]" />
              <span className="text-sm text-gray-300">Déploiement</span>
            </div>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#5AB1FF] to-[#B77BFF] flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-white">Build en cours...</div>
                  <div className="text-xs text-gray-500">Étape 2/3</div>
                </div>
              </div>
              <div className="w-6 h-6 border-2 border-[#5AB1FF] border-t-transparent rounded-full animate-spin"></div>
            </div>
            <div className="space-y-2 font-mono text-xs">
              <div className="flex items-center gap-2 text-green-400">
                <CheckCircle className="w-3 h-3" />
                Installation des dépendances... ✓
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <CheckCircle className="w-3 h-3" />
                Build de l&apos;application... ✓
              </div>
              <div className="flex items-center gap-2 text-[#5AB1FF]">
                <div className="w-3 h-3 border-2 border-[#5AB1FF] border-t-transparent rounded-full animate-spin"></div>
                Déploiement sur le serveur...
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <div className="w-3 h-3 rounded-full border-2 border-gray-600"></div>
                Configuration du domaine...
              </div>
            </div>
            <div className="pt-4 space-y-3">
              <div className="p-3 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-green-400">Déploiement réussi !</span>
                </div>
                <div className="text-xs text-gray-400">
                  Ton application est maintenant en ligne
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10">
                <span className="text-xs text-gray-400 flex-1 truncate">
                  https://mon-app-react.codesphere.app
                </span>
                <Button size="sm" variant="ghost" className="text-[#5AB1FF] hover:bg-[#5AB1FF]/10">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" x2="21" y1="14" y2="3" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-6 order-1 lg:order-2">
        <h3 className="text-3xl text-white" style={{ fontWeight: 700 }}>
          Teste et déploie en un clic
        </h3>
        <p className="text-lg text-gray-400 leading-relaxed">
          Visualise ton application en temps réel pendant que tu codes. 
          Quand tu es prêt, déploie en production avec un seul bouton.
        </p>
        <ul className="space-y-3">
          {[
            "Prévisualisation live pendant le développement",
            "Hot reload automatique à chaque modification",
            "Déploiement Docker optimisé",
            "URL personnalisée pour ton application"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <Play className="w-5 h-5 text-[#B77BFF] flex-shrink-0 mt-0.5" />
              <span className="text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
        <div className="p-6 rounded-xl bg-gradient-to-br from-[#B77BFF]/10 to-transparent border border-[#B77BFF]/20">
          <div className="flex items-start gap-3">
            <Zap className="w-5 h-5 text-[#B77BFF] flex-shrink-0 mt-1" />
            <div>
              <div className="text-white mb-1">Déploiement instantané</div>
              <p className="text-sm text-gray-400">
                De l&apos;idée au déploiement en moins de 5 minutes. 
                CodeSphere gère toute l&apos;infrastructure pour toi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

