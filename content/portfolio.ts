import {
  Atom,
  Binary,
  BrainCircuit,
  BriefcaseBusiness,
  Cloud,
  Gauge,
  GraduationCap,
  HeartHandshake,
  LineChart,
  Network,
  Orbit,
  Rocket,
  ShieldCheck,
  Sparkles,
  Telescope,
  UsersRound,
  WalletCards
} from "lucide-react";

export type ImpactMetric = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  detail: string;
};

export type ProductMetric = {
  label: string;
  value: string;
};

export type ProductStorySection = {
  id: string;
  title: string;
  eyebrow: string;
  body: string[];
};

export type Product = {
  slug: string;
  title: string;
  subtitle: string;
  company: string;
  timeframe: string;
  category: string;
  summary: string;
  narrative: string;
  tags: string[];
  metrics: ProductMetric[];
  featured?: boolean;
  accent: string;
  sections: ProductStorySection[];
  architecture: string[];
  lessons: string[];
  today: string[];
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  metrics: ProductMetric[];
};

export const profile = {
  name: "Jays Thomas",
  fullName: "Jays Jose Thomas",
  role: "Product Leader",
  current: "Product Lead at Krutrim AI Cloud",
  previous: "Previously Ola and Joveo",
  email: "jaysjosethomas@gmail.com",
  phone: "+91 82092 71442",
  linkedin: "https://www.linkedin.com/in/jays-jose-thomas/",
  github: "https://github.com/jaysjosethomas-maker",
  resumePath: "/resume/jays-thomas-resume.pdf",
  headline: "Building products that solve complex business problems at scale.",
  subheading:
    "Currently Product Lead at Krutrim AI Cloud. Previously built marketplace, SaaS, CRM, and consumer products at Ola and Joveo.",
  positioning:
    "A product leader for complex systems: AI infrastructure, cloud platforms, marketplaces, enterprise SaaS, and consumer products."
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/resume", label: "Resume" },
  { href: "/beyond-work", label: "Beyond Work" },
  { href: "/contact", label: "Contact" }
] as const;

export const impactMetrics: ImpactMetric[] = [
  {
    value: 5,
    suffix: "+",
    label: "Years",
    detail: "Product management across AI, cloud, marketplace, SaaS, and consumer."
  },
  {
    value: 25,
    suffix: "+",
    label: "Products",
    detail: "Services launched across compute, storage, networking, AI, CRM, and ops."
  },
  {
    value: 70,
    suffix: "K+",
    label: "MAU",
    detail: "Monthly active users for India's first public AI cloud."
  },
  {
    value: 44,
    prefix: "$",
    suffix: "M",
    label: "ARR",
    detail: "Annual recurring revenue built through the Krutrim AI Cloud launch."
  },
  {
    value: 99,
    suffix: "%",
    label: "CSAT",
    detail: "Customer satisfaction across a high-stakes cloud product surface."
  },
  {
    value: 121,
    suffix: "+",
    label: "PRDs",
    detail: "Decision documents and execution specs written across teams."
  }
];

export const leadershipMetrics: ImpactMetric[] = [
  {
    value: 8,
    label: "PMs led",
    detail: "Built strategy and operating rhythm for a multi-product PM team."
  },
  {
    value: 36,
    label: "Engineers led",
    detail: "Partnered across engineering, design, sales, support, and operations."
  },
  {
    value: 18,
    suffix: "hr",
    label: "Avg support SLA",
    detail: "Operationalized cloud support quality for enterprise customers."
  }
];

export const productPrinciples = [
  {
    title: "Great products reduce friction instead of adding features.",
    detail:
      "The best roadmap choice is often subtraction: fewer decisions, cleaner defaults, and systems that help users move faster."
  },
  {
    title: "Business impact matters more than feature count.",
    detail:
      "Product quality is measured through adoption, revenue, reliability, satisfaction, and the operating leverage it creates."
  },
  {
    title: "Complex systems deserve simple experiences.",
    detail:
      "AI infrastructure, cloud billing, marketplace operations, and CRMs work best when the product hides the complexity without hiding control."
  }
];

export const products: Product[] = [
  {
    slug: "ai-cloud",
    title: "AI Cloud",
    subtitle: "India's first public AI cloud",
    company: "Krutrim AI Cloud",
    timeframe: "2024 - Present",
    category: "AI Infrastructure",
    summary:
      "Led the 0-to-1 launch of a public cloud across compute, storage, networking, security, Kubernetes, databases, and AI development.",
    narrative:
      "A cloud platform is only trusted when every layer feels coherent. The work was to turn deep infrastructure complexity into a product customers could understand, adopt, and scale with.",
    tags: ["AI Cloud", "Platform", "0-to-1", "Leadership"],
    metrics: [
      { label: "Monthly active users", value: "70K+" },
      { label: "Annual recurring revenue", value: "$44.4M" },
      { label: "Customer satisfaction", value: "99%" }
    ],
    featured: true,
    accent: "from-slate-950 to-blue-950",
    sections: [
      {
        id: "overview",
        title: "Overview",
        eyebrow: "From infrastructure to product",
        body: [
          "Krutrim AI Cloud needed to launch as more than a catalog of services. It had to feel like a coherent operating system for builders working across compute, storage, networking, security, Kubernetes, databases, inference, and fine tuning.",
          "Jays led product strategy, roadmap planning, and execution across a team of product managers and interns, while aligning engineering, design, support, and business stakeholders around one customer-facing cloud experience."
        ]
      },
      {
        id: "problem",
        title: "Problem",
        eyebrow: "Trust is the product",
        body: [
          "Cloud customers do not evaluate individual features in isolation. They evaluate reliability, clarity, support quality, billing confidence, and whether the platform makes hard workflows feel safe.",
          "The product challenge was to launch a broad public cloud without fragmenting the experience into disconnected infrastructure surfaces."
        ]
      },
      {
        id: "business-context",
        title: "Business Context",
        eyebrow: "A national-scale platform bet",
        body: [
          "The platform needed to serve AI builders, enterprises, and internal teams with enough breadth to be useful on day one and enough operational discipline to scale.",
          "Success meant proving adoption, revenue, and customer satisfaction at the same time, not sequencing them as separate milestones."
        ]
      },
      {
        id: "constraints",
        title: "Constraints",
        eyebrow: "Breadth without chaos",
        body: [
          "The team had to coordinate service readiness across infrastructure, product, support, and GTM while keeping the user experience learnable.",
          "The core tradeoff was speed versus coherence: ship quickly, but not at the cost of customer trust."
        ]
      },
      {
        id: "execution",
        title: "Execution",
        eyebrow: "Operating model as product leverage",
        body: [
          "Jays created a product operating rhythm around PRDs, service sequencing, customer feedback, product quality, and support readiness.",
          "The result was a public launch spanning 25 services with 70K monthly active users, $44.4M ARR, 99% CSAT, and an 18-hour average support SLA."
        ]
      },
      {
        id: "impact",
        title: "Business Impact",
        eyebrow: "Proof through adoption",
        body: [
          "The launch established Krutrim AI Cloud as a serious platform surface, converting infrastructure depth into measurable product traction.",
          "The most important outcome was not the number of services launched. It was the customer confidence created by making many services feel like one platform."
        ]
      }
    ],
    architecture: [
      "Compute, storage, networking, security, Kubernetes, databases, and AI development services organized as one platform narrative.",
      "Support and product feedback loops connected directly to roadmap sequencing.",
      "Reusable product specifications for service launches, quality gates, and operational readiness."
    ],
    lessons: [
      "Platform launches need a product operating model as much as they need infrastructure readiness.",
      "Customers reward coherence: naming, defaults, documentation, pricing, and support all compound into trust.",
      "A strong roadmap makes tradeoffs visible before they become delivery risk."
    ],
    today: [
      "Add deeper product instrumentation around activation paths by workload.",
      "Create more self-serve migration patterns for teams moving from incumbent clouds.",
      "Make cost predictability even more visible inside core workflows."
    ]
  },
  {
    slug: "gpu-pods",
    title: "GPU Pods",
    subtitle: "Patent-pending GPU splicing architecture",
    company: "Krutrim AI Cloud",
    timeframe: "2024 - Present",
    category: "AI Infrastructure",
    summary:
      "Conceptualized a GPU splicing product using Kubernetes Pods to unlock utilization and package scarce GPU capacity more effectively.",
    narrative:
      "The product question was not simply how to expose GPUs. It was how to turn constrained infrastructure into flexible capacity customers could actually use.",
    tags: ["GPU", "Kubernetes", "Patent Pending", "AI Infra"],
    metrics: [
      { label: "Utilization period", value: "4 months" },
      { label: "GPU utilization", value: "100%" },
      { label: "Architecture", value: "Patent pending" }
    ],
    featured: true,
    accent: "from-neutral-950 to-violet-950",
    sections: [
      {
        id: "overview",
        title: "Overview",
        eyebrow: "Scarcity as a product problem",
        body: [
          "GPU capacity is one of the most constrained resources in AI infrastructure. Treating it as a raw unit creates underutilization, customer friction, and poor allocation efficiency.",
          "Jays conceptualized a spliced GPU architecture that used Kubernetes Pods to package capacity in a more flexible way for AI workloads."
        ]
      },
      {
        id: "problem",
        title: "Problem",
        eyebrow: "High demand, low flexibility",
        body: [
          "Customers wanted access to GPU capacity without always needing an entire large allocation. The platform needed a way to improve utilization while keeping the experience understandable.",
          "The product challenge was to convert a technical architecture into a customer-facing capability with clear value."
        ]
      },
      {
        id: "tradeoffs",
        title: "Tradeoffs",
        eyebrow: "Performance, isolation, and packaging",
        body: [
          "The key decisions sat at the intersection of workload isolation, scheduling, economics, and customer comprehension.",
          "A good product solution had to protect infrastructure quality while making the offering easy enough for teams to evaluate and adopt."
        ]
      },
      {
        id: "decision",
        title: "Decision",
        eyebrow: "A Kubernetes-native path",
        body: [
          "The direction centered on Kubernetes-native packaging because it matched how AI workloads were already being orchestrated.",
          "That gave the team a path to create a differentiated product surface without forcing customers into an unfamiliar mental model."
        ]
      },
      {
        id: "impact",
        title: "Business Impact",
        eyebrow: "Utilization as leverage",
        body: [
          "The architecture reached 100% utilization for four months, showing that product thinking applied to infrastructure packaging could unlock both customer value and business efficiency.",
          "The work is patent pending, reflecting a differentiated approach to AI cloud capacity."
        ]
      }
    ],
    architecture: [
      "Kubernetes Pods as the customer-visible abstraction for flexible GPU packaging.",
      "Capacity planning tied to utilization, scheduling, and workload quality.",
      "Product specification translated infrastructure constraints into pricing, UX, and support expectations."
    ],
    lessons: [
      "Scarce infrastructure becomes more valuable when productized around customer jobs, not raw capacity.",
      "Technical novelty only matters when it becomes easier for customers to buy, understand, and use.",
      "Utilization is both an infrastructure metric and a product-market fit signal."
    ],
    today: [
      "Expose clearer workload fit guidance before provisioning.",
      "Add richer self-serve observability for GPU utilization and cost.",
      "Develop packaging for common AI development profiles."
    ]
  },
  {
    slug: "driver-marketplace",
    title: "Driver Marketplace",
    subtitle: "Supply-side growth and onboarding transformation",
    company: "Ola Consumer",
    timeframe: "2024",
    category: "Marketplace",
    summary:
      "Redesigned driver onboarding with automation and OCR, improving attachments, conversion, and turnaround time.",
    narrative:
      "Marketplace growth depends on the quality of supply onboarding. Jays treated every document, rejection, and delay as a product lever.",
    tags: ["Marketplace", "OCR", "Growth", "Operations"],
    metrics: [
      { label: "Gross attachments", value: "+171.17%" },
      { label: "Conversion", value: "+44.08%" },
      { label: "TAT reduction", value: "1.63 days" }
    ],
    featured: true,
    accent: "from-zinc-950 to-amber-950",
    sections: [
      {
        id: "overview",
        title: "Overview",
        eyebrow: "Supply quality as growth",
        body: [
          "At Ola Consumer, Jays led supply-side product work across the Ola Partner app, Ola Fleet Technologies, and customer safety for a consumer business with one million monthly active users.",
          "The driver onboarding journey became the highest-leverage surface: improve it and the marketplace could grow faster with less operational drag."
        ]
      },
      {
        id: "problem",
        title: "Problem",
        eyebrow: "Every manual step leaked supply",
        body: [
          "Driver onboarding depended on document flows that created friction, ambiguity, and operational turnaround time.",
          "The customer problem was emotional as much as functional: drivers needed confidence that the system was moving them toward earning, not trapping them in verification loops."
        ]
      },
      {
        id: "research",
        title: "Research",
        eyebrow: "Finding the leak points",
        body: [
          "The team studied onboarding dropoffs, document rejection reasons, verification delays, and operational handoffs.",
          "Those signals clarified where automation would produce business impact instead of just making the interface feel modern."
        ]
      },
      {
        id: "execution",
        title: "Execution",
        eyebrow: "OCR plus journey simplification",
        body: [
          "Jays redesigned and revamped the onboarding journey by simplifying the flow and automating document verification through OCR.",
          "The work improved gross attachments by 171.17% month over month, improved overall conversion by 44.08%, and reduced turnaround time by 1.63 days."
        ]
      },
      {
        id: "impact",
        title: "Business Impact",
        eyebrow: "Recognized at group level",
        body: [
          "The transformation earned special mention from Ola Group CEO Bhavish Aggarwal for significantly improving the driver onboarding process.",
          "The larger lesson: supply growth is often unlocked by making operational systems feel invisible to the user."
        ]
      }
    ],
    architecture: [
      "OCR-assisted document verification connected to onboarding state transitions.",
      "Reduced manual checkpoints and clarified next-best actions for drivers.",
      "Operational dashboards and feedback loops for rejection reasons and turnaround time."
    ],
    lessons: [
      "Marketplace onboarding should be measured as a conversion system, not a compliance form.",
      "Automation is valuable only when it reduces uncertainty for the user.",
      "Operational metrics reveal product opportunities faster than opinions."
    ],
    today: [
      "Introduce proactive education before document upload.",
      "Create personalized recovery paths for failed verification.",
      "Use predictive risk scoring to route edge cases more intelligently."
    ]
  },
  {
    slug: "cloud-billing",
    title: "Cloud Billing",
    subtitle: "Cost confidence for cloud adoption",
    company: "Krutrim AI Cloud",
    timeframe: "2024 - Present",
    category: "Cloud Platform",
    summary:
      "A platform billing surface designed to make cloud usage understandable, governable, and enterprise-ready.",
    narrative:
      "Billing is not a back-office feature in cloud. It is a trust surface that influences adoption, usage, and renewals.",
    tags: ["Cloud", "Billing", "Enterprise", "FinOps"],
    metrics: [
      { label: "Cloud portfolio", value: "25 services" },
      { label: "ARR context", value: "$44.4M" },
      { label: "Customer trust", value: "99% CSAT" }
    ],
    featured: true,
    accent: "from-neutral-950 to-emerald-950",
    sections: [
      {
        id: "overview",
        title: "Overview",
        eyebrow: "Billing as product trust",
        body: [
          "For cloud customers, cost visibility determines whether teams feel safe expanding usage. Billing cannot be an afterthought once services scale across compute, storage, networking, and AI workloads.",
          "The product goal was to create a billing foundation that supported adoption, governance, and customer confidence."
        ]
      },
      {
        id: "problem",
        title: "Problem",
        eyebrow: "Usage without clarity creates risk",
        body: [
          "Infrastructure usage can grow faster than teams understand it. Without clear pricing, usage attribution, and support paths, billing becomes a blocker to adoption.",
          "The challenge was to connect business logic, service metering, invoices, and user comprehension."
        ]
      },
      {
        id: "tradeoffs",
        title: "Tradeoffs",
        eyebrow: "Accuracy versus simplicity",
        body: [
          "Billing systems demand precision, but product experiences demand clarity. Every design decision had to preserve correctness without making customers decode the platform.",
          "The product direction prioritized explainability: show what changed, why it changed, and what action a customer can take next."
        ]
      },
      {
        id: "impact",
        title: "Business Impact",
        eyebrow: "Confidence compounds usage",
        body: [
          "A strong billing surface supported the larger cloud launch by reducing uncertainty around cost and helping customers trust the platform with more workloads.",
          "The work reinforced that cloud adoption is both technical and financial."
        ]
      }
    ],
    architecture: [
      "Service metering concepts mapped to customer-facing usage and invoice language.",
      "Billing operations connected to product support workflows.",
      "Enterprise readiness designed around transparency, governance, and escalation paths."
    ],
    lessons: [
      "Cloud billing is a customer experience, not just finance infrastructure.",
      "Pricing clarity can unlock product adoption as much as feature depth.",
      "The best enterprise systems reduce surprise."
    ],
    today: [
      "Add richer budget policies and alerting primitives.",
      "Expose unit economics for AI workloads in-product.",
      "Create more guided cost optimization workflows."
    ]
  },
  {
    slug: "crm",
    title: "CRM Systems",
    subtitle: "Sales, procurement, and escalation systems at speed",
    company: "Ola Cars",
    timeframe: "2021 - 2022",
    category: "Enterprise SaaS",
    summary:
      "Designed and shipped sales and procurement CRM workflows that increased monthly sales and reduced escalations.",
    narrative:
      "CRM work is rarely glamorous, but it can become the operating system of a business when built around real workflows.",
    tags: ["CRM", "Operations", "Enterprise SaaS", "0-to-1"],
    metrics: [
      { label: "Monthly sales uplift", value: "+380%" },
      { label: "Escalation reduction", value: "-30%" },
      { label: "TAT reduction", value: "2 days" }
    ],
    featured: true,
    accent: "from-stone-950 to-cyan-950",
    sections: [
      {
        id: "overview",
        title: "Overview",
        eyebrow: "Operations as product",
        body: [
          "At Ola Cars, Jays designed and built sales CRM and procurement CRM workflows using LeadSquared under intense time constraints.",
          "The systems became business-critical because they matched how teams actually worked instead of forcing operations into generic tools."
        ]
      },
      {
        id: "problem",
        title: "Problem",
        eyebrow: "Growth needed operating leverage",
        body: [
          "The used-car business required coordination across sellers, customer support, sales operations, procurement, CRMs, and backend dashboards.",
          "Without a reliable operating system, every handoff created leakage, delay, or customer escalation."
        ]
      },
      {
        id: "execution",
        title: "Execution",
        eyebrow: "Fast systems, clear workflows",
        body: [
          "Jays built a sales CRM in two weeks and procurement CRM in one week, while also designing a customer escalation prevention and resolution system in Zendesk.",
          "The work increased monthly sales by 380%, reduced monthly escalations by 30%, and reduced average turnaround time by two days."
        ]
      },
      {
        id: "impact",
        title: "Business Impact",
        eyebrow: "A reference architecture",
        body: [
          "Jays also designed the high-level architecture for Ola Cars with 10 microservices for MSD 360 CRM, which remained a reference inside Ola.",
          "The impact came from treating internal tooling with the same quality bar as customer-facing products."
        ]
      }
    ],
    architecture: [
      "LeadSquared-based sales and procurement workflows for high-speed launch.",
      "Zendesk escalation prevention system tied to customer support operations.",
      "MSD 360 CRM architecture across 10 microservices."
    ],
    lessons: [
      "Internal tools are products when business throughput depends on them.",
      "Speed works when requirements are anchored in real operator behavior.",
      "Escalation reduction is a customer experience metric."
    ],
    today: [
      "Add deeper workflow analytics for every operational handoff.",
      "Create stronger role-based surfaces for each team.",
      "Invest earlier in no-code to code migration paths."
    ]
  },
  {
    slug: "object-storage",
    title: "Object Storage",
    subtitle: "A foundational cloud primitive",
    company: "Krutrim AI Cloud",
    timeframe: "2024 - Present",
    category: "Cloud Platform",
    summary:
      "A storage product surface designed as part of the broader public cloud platform launch.",
    narrative:
      "Storage only looks simple from the outside. Customers judge it by reliability, permissions, pricing, access patterns, and how naturally it fits the rest of the platform.",
    tags: ["Storage", "Cloud", "Platform", "Developer Experience"],
    metrics: [
      { label: "Platform services", value: "25" },
      { label: "Cloud MAU", value: "70K+" },
      { label: "CSAT", value: "99%" }
    ],
    featured: true,
    accent: "from-neutral-950 to-sky-950",
    sections: [
      {
        id: "overview",
        title: "Overview",
        eyebrow: "A primitive customers build on",
        body: [
          "Object storage was part of the foundational cloud surface spanning storage, compute, networking, security, databases, and AI development.",
          "The product goal was to make storage feel dependable, understandable, and integrated with the rest of the cloud platform."
        ]
      },
      {
        id: "problem",
        title: "Problem",
        eyebrow: "Simple API, complex expectations",
        body: [
          "Customers expect object storage to be invisible until something goes wrong. That makes reliability, access control, naming, and pricing central to the product experience.",
          "The challenge was to fit storage into a broader platform without making it feel like an isolated service."
        ]
      },
      {
        id: "execution",
        title: "Execution",
        eyebrow: "Platform coherence",
        body: [
          "The work focused on launch readiness, positioning, service documentation, support quality, and integration into the platform navigation and billing model.",
          "Storage became one of the services that helped the cloud feel complete enough for real AI and application workloads."
        ]
      },
      {
        id: "impact",
        title: "Business Impact",
        eyebrow: "A platform is a bundle of trust",
        body: [
          "Object storage contributed to the breadth and credibility of the Krutrim AI Cloud launch.",
          "Its value was amplified by the surrounding platform: users could combine it with compute, AI workflows, networking, and databases."
        ]
      }
    ],
    architecture: [
      "Storage positioned within the broader cloud navigation and service model.",
      "Documentation and support readiness aligned with launch quality gates.",
      "Billing and access patterns designed to support enterprise use."
    ],
    lessons: [
      "Foundational primitives need exceptional defaults.",
      "Documentation is part of the product for infrastructure services.",
      "Trust in one cloud service affects trust in the entire platform."
    ],
    today: [
      "Add workload-specific storage setup flows.",
      "Improve lifecycle policy discoverability.",
      "Create more visible reliability and usage insights."
    ]
  },
  {
    slug: "inference",
    title: "Inference",
    subtitle: "AI development workflows for teams building with models",
    company: "Krutrim AI Cloud",
    timeframe: "2024 - Present",
    category: "AI Platform",
    summary:
      "Inference product foundations for AI builders inside a broader cloud platform.",
    narrative:
      "Inference sits where infrastructure meets product velocity. The experience must make model usage fast, reliable, observable, and economically understandable.",
    tags: ["AI Platform", "Inference", "Developer Experience"],
    metrics: [
      { label: "Cloud MAU", value: "70K+" },
      { label: "ARR context", value: "$44.4M" },
      { label: "AI services", value: "Launch portfolio" }
    ],
    accent: "from-zinc-950 to-indigo-950",
    sections: [
      {
        id: "overview",
        title: "Overview",
        eyebrow: "From model access to workflow",
        body: [
          "Inference was part of the AI development surface inside Krutrim AI Cloud, alongside infrastructure services needed to build, run, and scale applications.",
          "The product direction focused on making model usage feel like a reliable workflow, not a one-off API call."
        ]
      },
      {
        id: "problem",
        title: "Problem",
        eyebrow: "AI teams need speed and control",
        body: [
          "Teams evaluating inference need clarity around latency, reliability, access, cost, and integration paths.",
          "The challenge was to build confidence for users who were comparing the product against both incumbent clouds and emerging AI platforms."
        ]
      },
      {
        id: "execution",
        title: "Execution",
        eyebrow: "Productizing the AI workflow",
        body: [
          "The work connected model access with platform expectations: documentation, support, pricing clarity, account readiness, and integration into cloud workflows.",
          "The goal was to make inference part of a complete AI builder journey."
        ]
      },
      {
        id: "impact",
        title: "Business Impact",
        eyebrow: "AI capability as platform pull",
        body: [
          "Inference helped make the cloud platform more compelling for AI-native teams and enterprise workloads.",
          "It gave the broader launch a differentiated AI development story beyond commodity infrastructure."
        ]
      }
    ],
    architecture: [
      "Inference positioned inside the AI development service family.",
      "Product readiness connected to docs, support, account setup, and pricing expectations.",
      "Customer feedback loops feeding roadmap decisions across AI services."
    ],
    lessons: [
      "AI platforms must package reliability and economics as clearly as model access.",
      "Developer experience is a business differentiator in infrastructure.",
      "The best AI workflows reduce the distance between idea, test, and production."
    ],
    today: [
      "Add clearer latency and cost benchmarks by use case.",
      "Create guided quickstarts for common product workloads.",
      "Build stronger observability into the inference journey."
    ]
  },
  {
    slug: "fine-tuning",
    title: "Fine Tuning",
    subtitle: "Custom model workflows for applied AI teams",
    company: "Krutrim AI Cloud",
    timeframe: "2024 - Present",
    category: "AI Platform",
    summary:
      "Fine-tuning workflow foundations as part of Krutrim's AI development platform.",
    narrative:
      "Fine tuning is a product experience made of data preparation, model selection, evaluation, cost visibility, and deployment confidence.",
    tags: ["AI Platform", "Fine Tuning", "Workflows"],
    metrics: [
      { label: "AI cloud launch", value: "0-to-1" },
      { label: "Service portfolio", value: "25" },
      { label: "CSAT", value: "99%" }
    ],
    accent: "from-neutral-950 to-fuchsia-950",
    sections: [
      {
        id: "overview",
        title: "Overview",
        eyebrow: "Applied AI needs repeatable workflows",
        body: [
          "Fine tuning was part of the AI development surface in the Krutrim AI Cloud launch.",
          "The product opportunity was to turn a technically nuanced workflow into a repeatable path for teams adapting models to their business context."
        ]
      },
      {
        id: "problem",
        title: "Problem",
        eyebrow: "The workflow has many failure modes",
        body: [
          "Customers need help understanding data readiness, model fit, evaluation quality, deployment expectations, and cost.",
          "A fine-tuning product has to reduce uncertainty across every step, not just expose compute."
        ]
      },
      {
        id: "decision",
        title: "Decision",
        eyebrow: "Guide the system, not just the screen",
        body: [
          "The product direction emphasized workflow clarity, supporting documentation, and platform integration.",
          "The goal was to help customers understand what they were doing, why it mattered, and how to evaluate whether it worked."
        ]
      },
      {
        id: "impact",
        title: "Business Impact",
        eyebrow: "More reasons to build on the platform",
        body: [
          "Fine tuning expanded the cloud from raw infrastructure into a platform for AI development.",
          "It helped the broader product story: customers could build, customize, and operate AI workloads in one place."
        ]
      }
    ],
    architecture: [
      "Fine-tuning workflows integrated with account, compute, storage, and AI service expectations.",
      "Launch readiness tied to documentation, support, and evaluation paths.",
      "Roadmap framed around customer confidence from data to deployment."
    ],
    lessons: [
      "AI workflow products need education built into the experience.",
      "Evaluation is a product feature, not an offline activity.",
      "Customers adopt faster when the product makes uncertainty visible."
    ],
    today: [
      "Add evaluation dashboards and suggested quality gates.",
      "Create dataset readiness checks before training begins.",
      "Introduce stronger cost forecasting before job submission."
    ]
  }
];

export const featuredProducts = products.filter((product) => product.featured);

export const experiences: Experience[] = [
  {
    company: "Krutrim AI Cloud",
    role: "Product Lead",
    period: "June 2024 - Present",
    location: "AI infrastructure and public cloud",
    summary:
      "Leads product strategy, roadmap planning, and execution for India's first public AI cloud.",
    highlights: [
      "Managed 8 product managers and 4 product interns across AI cloud services.",
      "Launched a 0-to-1 public cloud with 25 services across compute, storage, networking, security, Kubernetes, databases, and AI development.",
      "Conceptualized patent-pending GPU splicing architecture using Kubernetes Pods."
    ],
    metrics: [
      { label: "MAU", value: "70K+" },
      { label: "ARR", value: "$44.4M" },
      { label: "CSAT", value: "99%" }
    ]
  },
  {
    company: "Ola Consumer",
    role: "Product Manager",
    period: "Feb 2024 - June 2024",
    location: "Marketplace supply, fleet, and safety",
    summary:
      "Owned supply-side product, Ola Partner app, Ola Fleet Technologies, and customer safety for a 1M MAU consumer business.",
    highlights: [
      "Redesigned driver onboarding by simplifying flows and automating document verification through OCR.",
      "Improved gross attachments, conversion, and turnaround time.",
      "Received special mention from Ola Group CEO Bhavish Aggarwal for the onboarding transformation."
    ],
    metrics: [
      { label: "Gross attachments", value: "+171.17%" },
      { label: "Conversion", value: "+44.08%" },
      { label: "TAT", value: "-1.63 days" }
    ]
  },
  {
    company: "Joveo",
    role: "Product Manager",
    period: "Sep 2022 - Jan 2024",
    location: "Job advertising platform",
    summary:
      "Stabilized backend product systems for a job advertising platform tracking clicks and conversions through pixels and fingerprints.",
    highlights: [
      "Reduced monthly bug tickets from triple digits to single digits.",
      "Designed a bot-detection conversion qualifying tool that improved conversion and generated new revenue.",
      "Built anomaly detection tools using spike detection algorithms to reduce client bug tickets."
    ],
    metrics: [
      { label: "Bug tickets", value: "-20%" },
      { label: "Revenue", value: "$85K/mo" },
      { label: "Client tickets", value: "-30%" }
    ]
  },
  {
    company: "Ola Cars and Ola Electric",
    role: "Associate Product Manager -> Product Manager",
    period: "May 2021 - Aug 2022",
    location: "Vehicle commerce, CRM, and operations",
    summary:
      "Built 0-to-1 products, CRM systems, and marketplace workflows across Ola Cars and Ola Electric.",
    highlights: [
      "Only fresher APM recruited in Ola Group in 2021 and later promoted to PM.",
      "Built Ola Cars into the second largest used cars platform in India within 3 months of pilot.",
      "Led 8 PMs, 36 engineers, and 2 designers to release the pilot version to 2,500 users."
    ],
    metrics: [
      { label: "Monthly sales", value: "+380%" },
      { label: "PRDs", value: "121" },
      { label: "Users in pilot", value: "2,500" }
    ]
  },
  {
    company: "BITS Pilani",
    role: "Integrated M.Sc. Physics and B.E. Chemical Engineering",
    period: "Aug 2016 - May 2021",
    location: "Pilani Campus",
    summary:
      "Built the analytical foundation behind Jays' systems thinking: physics, engineering, product judgment, and interdisciplinary problem solving.",
    highlights: [
      "Integrated M.Sc. (Hons.) Physics.",
      "B.E. (Hons.) Chemical Engineering.",
      "Started PM Buddy, a nonprofit mock interview platform, while building a product career."
    ],
    metrics: [
      { label: "Degrees", value: "2" },
      { label: "PM Buddy cohort", value: "25" },
      { label: "Focus", value: "Systems" }
    ]
  }
];

export const resumeHighlights = [
  {
    title: "Product leadership",
    icon: UsersRound,
    detail:
      "Led product managers, interns, engineers, and designers across cloud, marketplace, SaaS, and consumer product surfaces."
  },
  {
    title: "AI infrastructure",
    icon: BrainCircuit,
    detail:
      "Launched AI cloud services across compute, storage, networking, Kubernetes, inference, and fine tuning."
  },
  {
    title: "Business outcomes",
    icon: LineChart,
    detail:
      "Built products tied to ARR, conversion, revenue, CSAT, support SLA, and operational efficiency."
  },
  {
    title: "Systems thinking",
    icon: Network,
    detail:
      "Turns messy multi-team workflows into clear product surfaces, operating rhythms, and customer outcomes."
  }
];

export const capabilityGroups = [
  {
    title: "Product strategy",
    items: ["0-to-1 products", "Roadmaps", "Product operations", "PRDs"]
  },
  {
    title: "Platform depth",
    items: ["AI infrastructure", "Cloud platforms", "APIs", "Kubernetes"]
  },
  {
    title: "Business systems",
    items: ["Marketplaces", "CRM", "Funnels", "Analytics"]
  },
  {
    title: "Leadership",
    items: ["Cross-functional teams", "Hiring loops", "Mentoring", "Execution"]
  }
];

export const beyondWork = [
  {
    title: "The Physics of Life",
    description:
      "A lens for understanding systems, incentives, emergence, and why simple rules can create complex outcomes.",
    icon: Atom
  },
  {
    title: "Astronomy",
    description:
      "A reminder to think in long arcs, ask better questions, and stay humble in front of scale.",
    icon: Telescope
  },
  {
    title: "Photography",
    description:
      "Practicing attention: composition, restraint, and noticing what most people move past.",
    icon: Sparkles
  },
  {
    title: "Mentoring",
    description:
      "Through PM Buddy, Jays helped make product interview preparation more accessible for students and early professionals.",
    icon: HeartHandshake
  }
];

export const homepageSignals = [
  {
    icon: Cloud,
    title: "AI infrastructure",
    detail: "Built public cloud and AI development products for builders at scale."
  },
  {
    icon: Gauge,
    title: "Operating leverage",
    detail: "Improved conversion, SLA, bug rates, revenue, and team throughput."
  },
  {
    icon: ShieldCheck,
    title: "Customer trust",
    detail: "Turns complex systems into reliable, understandable product experiences."
  }
];

export const productIndexIcons = {
  "AI Infrastructure": BrainCircuit,
  Marketplace: UsersRound,
  "Cloud Platform": Cloud,
  "Enterprise SaaS": BriefcaseBusiness,
  "AI Platform": Binary
} as const;

export const contactLinks = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: WalletCards
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/jays-jose-thomas",
    href: profile.linkedin,
    icon: BriefcaseBusiness
  },
  {
    label: "Resume",
    value: "Download PDF",
    href: profile.resumePath,
    icon: GraduationCap
  },
  {
    label: "GitHub",
    value: "jaysjosethomas-maker",
    href: profile.github,
    icon: Rocket
  },
  {
    label: "Calendly",
    value: "Request availability",
    href: `mailto:${profile.email}?subject=Conversation%20with%20Jays%20Thomas`,
    icon: Orbit
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    icon: WalletCards
  }
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
