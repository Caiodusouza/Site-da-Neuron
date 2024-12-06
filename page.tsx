<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">Últimas do Blog</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          title: "5 Dicas para se Preparar para o ENEM",
          excerpt: "Confira as melhores estratégias para se dar bem no Exame Nacional do Ensino Médio.",
          image: "/placeholder.svg"
        },
        {
          title: "Como Escolher o Curso Certo para Você",
          excerpt: "Descubra como alinhar seus interesses e habilidades com a carreira ideal.",
          image: "/placeholder.svg"
        },
        {
          title: "Benefícios do Intercâmbio durante o Ensino Médio",
          excerpt: "Saiba como uma experiência internacional pode impactar positivamente seu futuro acadêmico e profissional.",
          image: "/placeholder.svg"
        }
      ].map((post, index) => (
        <Card key={index} className="overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            width={400}
            height={200}
            className="w-full h-48 object-cover"
          />
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
            <p className="text-muted-foreground mb-4">{post.excerpt}</p>
            <Link href="#" className="text-purple-600 hover:underline">
              Ler mais
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
    <div className="text-center mt-8">
      <Button variant="outline" size="lg">Ver todos os posts</Button>
    </div>
  </div>
</section>

