import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Сколько стоят ваши услуги?",
    answer:
      "Комиссия риелтора составляет от 2% от стоимости сделки. Первичная консультация — бесплатно. Точную стоимость обговариваем на встрече после знакомства с вашим запросом.",
  },
  {
    question: "Как быстро можно найти квартиру?",
    answer:
      "В среднем подбор занимает от 1 до 4 недель. Сроки зависят от ваших пожеланий и бюджета. Я работаю быстро, но никогда не тороплю клиента с принятием решения.",
  },
  {
    question: "Вы проверяете юридическую чистоту объекта?",
    answer:
      "Да, это обязательная часть моей работы. Я проверяю историю объекта, наличие обременений, долгов и правомерность сделки. При необходимости привлекаю юриста.",
  },
  {
    question: "Работаете ли вы с ипотекой?",
    answer:
      "Конечно. Помогаю подобрать банк с выгодными условиями, собрать документы и подать заявку. Работаю с ведущими банками и знаю, как повысить шансы на одобрение.",
  },
  {
    question: "Можно ли продать квартиру быстро?",
    answer:
      "Да. Правильная оценка, качественные фото и грамотное размещение объявлений позволяют найти покупателя за 2–4 недели. Беру на себя все показы и переговоры.",
  },
  {
    question: "Как начать работу?",
    answer:
      "Просто свяжитесь со мной — по телефону или через форму на сайте. Проведём бесплатную консультацию, обсудим ваш запрос и составим план действий.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}