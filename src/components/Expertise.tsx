import { useEffect, useRef, useState } from "react"
import { Home, FileText, Search, Handshake, BadgeCheck, Scale, Shield, Umbrella } from "lucide-react"
import { HighlightedText } from "./HighlightedText"

const expertiseAreas = [
  {
    title: "Покупка квартиры",
    description: "Помогу найти квартиру под ваш бюджет и пожелания, проверю юридическую чистоту и проведу сделку от начала до конца.",
    icon: Home,
  },
  {
    title: "Продажа недвижимости",
    description:
      "Оценю объект по рынку, сделаю профессиональные фото, организую показы и найду покупателя в кратчайшие сроки по максимально выгодной цене. Полное сопровождение до регистрации перехода права собственности.",
    icon: FileText,
  },
  {
    title: "Подбор по параметрам",
    description:
      "Провожу полный анализ рынка и отбираю только подходящие варианты — без лишних просмотров и потери времени.",
    icon: Search,
  },
  {
    title: "Сопровождение сделки",
    description:
      "Беру на себя все переговоры, проверку документов и взаимодействие с банком, нотариусом и регистраторами.",
    icon: Handshake,
  },
  {
    title: "Одобрение ипотеки 100%",
    description:
      "Подберу банк с лучшими условиями и помогу получить одобрение. Работаю с ведущими банками и знаю, как добиться положительного решения.",
    icon: BadgeCheck,
  },
  {
    title: "Правовая экспертиза",
    description:
      "Проверю юридическую историю объекта, наличие обременений и рисков. Вы будете уверены в чистоте сделки до подписания договора.",
    icon: Scale,
  },
  {
    title: "Сопровождение на всех этапах",
    description:
      "От первого звонка до получения ключей — всегда на связи. Помогаю с документами, переговорами, регистрацией права собственности.",
    icon: Shield,
  },
  {
    title: "Услуги страхования",
    description:
      "Помогу оформить страхование недвижимости, жизни и титула. Подберу выгодный полис и объясню, что и от чего защищает.",
    icon: Umbrella,
  },
]

export function Expertise() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.2 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-20">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Мои услуги</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
            <HighlightedText>Помогу</HighlightedText> с любым
            <br />
            вопросом
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Более 5 лет на рынке недвижимости. Провёл свыше 100 успешных сделок — покупка, продажа и аренда любой сложности.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <div
                key={area.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`relative pl-8 border-l border-border transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className={`transition-all duration-1000 ${
                    visibleItems.includes(index) ? "animate-draw-stroke" : ""
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <Icon className="w-10 h-10 mb-4 text-foreground" strokeWidth={1.25} />
                </div>
                <h3 className="text-xl font-medium mb-4">{area.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{area.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}