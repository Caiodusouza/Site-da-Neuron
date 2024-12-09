'use client'

import { useState, useEffect } from 'react'
import Image from "next/image"
import Link from "next/link"
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Gamepad2, PenTool, Sparkles, Zap, Globe, Star } from 'lucide-react'
import { Navbar } from "../components/Navbar"
import { useTheme } from "../components/ThemeContext"
import { Input } from "@/components/ui/input"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function Home() {
  const { isDarkMode } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
       <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-[#EEF5DB]'}`}>
    
       <Navbar />


        {/* Hero Section */}
        <section className="relative bg-[url('/FundoDiaSemSol.png')] dark:bg-[url('/FundoNoturno.png')] bg-cover bg-center py-20 md:py-32 pb-36 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white drop-shadow-lg">
                  Transforme Sua Educação com a Neuron
                </h1>
                <p className="text-xl text-white drop-shadow-md">
                  Tecnologia avançada, oportunidades globais e aprendizado personalizado para impulsionar seu futuro!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-100 transition-colors duration-300">
                      Comece Já
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      size="lg" 
                      className="bg-white border-2 border-white text-purple-600 hover:bg-white hover:text-purple-600 transition-colors duration-300 shadow-lg backdrop-blur-sm font-semibold"
                    >
                      Saiba mais
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative h-[400px]"
              >
                {!isDarkMode && (
                  <div className="absolute top-[-170px] right-[400px] w-80 h-80">
                    <Image
                      src="/SolHome.png"
                      alt="Sun illustration"
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                <div className="absolute inset-0">
                  <Image
                    src="/AviaoCima.png"
                    alt="Educational Illustration"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg 
              viewBox="0 0 1440 120" 
              className="w-full h-auto preserve-3d"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                className="fill-white dark:fill-gray-900"
                d="M0,32L60,37.3C120,43,240,53,360,58.7C480,64,600,64,720,58.7C840,53,960,43,1080,42.7C1200,43,1320,53,1380,58.7L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
              >
                <animate 
                  attributeName="d" 
                  dur="10s" 
                  repeatCount="indefinite" 
                  values="M0,32L60,37.3C120,43,240,53,360,58.7C480,64,600,64,720,58.7C840,53,960,43,1080,42.7C1200,43,1320,53,1380,58.7L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z;
                          M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z;
                          M0,32L60,37.3C120,43,240,53,360,58.7C480,64,600,64,720,58.7C840,53,960,43,1080,42.7C1200,43,1320,53,1380,58.7L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
                />
              </path>
            </svg>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Funcionalidades que Transformam o Aprendizado
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Brain, title: "IA Personalizada", description: "Suporte adaptativo em suas atividades" },
                { icon: Gamepad2, title: "Gamificação", description: "Aprenda com métodos divertidos e envolventes" },
                { icon: PenTool, title: "Auxílio em Redação", description: "Melhore suas habilidades de escrita" },
                { icon: Globe, title: "Oportunidades Globais", description: "Conecte-se com programas internacionais" },
                { icon: Zap, title: "Aprendizado Acelerado", description: "Técnicas para absorver conteúdo rapidamente" },
                { icon: Sparkles, title: "Projetos Inovadores", description: "Aplique seu conhecimento em desafios reais" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6 space-y-4">
                      <feature.icon className="w-12 h-12 text-purple-600 dark:text-purple-400" />
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              O que nossos alunos dizem
            </h2>
            <Carousel className="max-w-4xl mx-auto">
              <CarouselContent>
                {[
                  {
                    name: "Laryssa Marques",
                    role: "Estudante do 2º ano",
                    content: "A Neuron transformou minha forma de estudar. Consegui melhorar minhas notas e me sinto mais confiante para o vestibular!",
                    avatar: "/Lary.jpg"
                  },
                  {
                    name: "Marcos Vinicius",
                    role: "Estudante do 3º ano",
                    content: "Graças à plataforma, consegui uma bolsa de estudos para um intercâmbio nos EUA. Uma experiência incrível!",
                    avatar: "/Marcos.jpg"
                  },
                  {
                    name: "Teylor Costa",
                    role: "Ex-aluno, atual universitário",
                    content: "A Neuron foi fundamental para minha aprovação em Medicina. O suporte e os recursos oferecidos fizeram toda a diferença.",
                    avatar: "/Teylor.jpg"
                  }
                ].map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            width={64}
                            height={64}
                            className="rounded-full mr-4"
                          />
                          <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{testimonial.content}</p>
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-current" />
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-purple-600 dark:bg-purple-800">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Pronto para Transformar sua Educação e Realizar Seus Sonhos?
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
                Junte-se à Neuron hoje e descubra como podemos revolucionar sua jornada de aprendizado!
              </p>
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-100">
                Experimente Gratuitamente
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold">Neuron</h4>
                <p className="text-sm text-gray-400">
                  Transformando a educação através da tecnologia e oportunidades globais.
                </p>
                <div className="flex space-x-4">
                  <Link href="#" className="text-gray-400 hover:text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.772-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666z" clipRule="evenodd" />
                    </svg>
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Recursos</h4>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-sm text-gray-400 hover:text-white">Plataforma de Estudos</Link></li>
                  <li><Link href="#" className="text-sm text-gray-400 hover:text-white">Simulados Online</Link></li>
                  <li><Link href="#" className="text-sm text-gray-400 hover:text-white">Videoaulas</Link></li>
                  <li><Link href="#" className="text-sm text-gray-400 hover:text-white">Material Didático</Link></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Suporte</h4>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-sm text-gray-400 hover:text-white">Central de Ajuda</Link></li>
                  <li><Link href="#" className="text-sm text-gray-400 hover:text-white">Comunidade</Link></li>
                  <li><Link href="#" className="text-sm text-gray-400 hover:text-white">Tutoriais</Link></li>
                  <li><Link href="#" className="text-sm text-gray-400 hover:text-white">Contato</Link></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Newsletter</h4>
                <p className="text-sm text-gray-400">Receba novidades e dicas de estudo</p>
                <form className="flex flex-col sm:flex-row gap-2">
                  <Input type="email" placeholder="Seu e-mail" className="bg-gray-800 border-gray-700 text-white placeholder-gray-400" />
                  <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white">Inscrever</Button>
                </form>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
              © 2024 Neuron. Todos os direitos reservados.
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
