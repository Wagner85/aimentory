// Dados dos produtos
const products = [
    {
        title: 'IA para Suporte 24/7',
        description: 'Tenha um assistente virtual personalizado disponível 24 horas por dia. Integre com seus sistemas existentes e ofereça suporte instantâneo com respostas precisas e contextualizadas.',
        features: ['Respostas personalizadas', 'Integração com sistemas', 'Suporte multilíngue', 'Análise de dados em tempo real']
    },
    {
        title: 'Prompts Estratégicos',
        description: 'Collection de prompts especializados para otimizar sua comunicação com IAs. Aumente sua produtividade e obtenha resultados superiores em suas interações.',
        features: ['Templates personalizados', 'Otimização contínua', 'Casos de uso práticos', 'Atualizações regulares']
    },
    {
        title: 'Mentoria Especializada',
        description: 'Mentoria personalizada para implementar IA em seu negócio ou carreira. Desenvolvemos estratégias sob medida para maximizar seus resultados.',
        features: ['Consultoria individual', 'Plano estratégico', 'Acompanhamento contínuo', 'Suporte dedicado']
    }
];

// Adicionar estilos dinâmicos para os cards
const style = document.createElement('style');
style.textContent = `
    .product-card {
        background-color: rgba(255, 255, 255, 0.05);
        padding: 2rem;
        border-radius: 8px;
        transition: transform 0.3s ease;
    }
    
    .product-card:hover {
        transform: translateY(-5px);
    }
    
    .product-card h3 {
        margin-bottom: 1rem;
        font-size: 1.5rem;
    }
    
    .product-card .description {
        margin-bottom: 1.5rem;
        color: #cccccc;
        line-height: 1.6;
    }

    .features-list {
        list-style: none;
        margin-bottom: 1.5rem;
        color: #ffffff;
    }

    .features-list li {
        margin-bottom: 0.5rem;
        padding-left: 1.5rem;
        position: relative;
    }

    .features-list li:before {
        content: "→";
        position: absolute;
        left: 0;
        color: #ffffff;
    }
`;

document.head.appendChild(style);

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll para links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
