import {
  FIELD_TYPES,
  SECTION_TYPES,
} from "../../../../consts";

const {
  text,
  textarea,
  radio,
  radioGroup,
  phone,
  email,
  date,
  dateMulti,
  file,
  list,
} = FIELD_TYPES;

const {
  base,
  filled,
} = SECTION_TYPES;

const schema = {
  main: {
    title: 'Основная информация',
    sections: {
      0: {
        items: {
          whichPosition: {
            title: 'На какую должность претендуете?',
            code: 'UF_CRM_14_VACANCY',
            type: text,
            col: 12,
            // value: 'Тест: Разработчик ПО',
          },
          whoRecommended: {
            title: 'ФИО сотрудника, кто порекомендовал вакансию',
            code: '',
            type: text,
            col: 12,
            disabled: false,
            // value: 'Василий Иванович',
          },
          nobodyRecommended: {
            title: 'Никто не рекомендовал',
            code: '',
            type: radio,
            col: 12,
            linkedField: 'whoRecommended',
          },
        },
      },
    },
  },
  personal: {
    title: 'Личные данные',
    sections: {
      0: {
        items: {
          fio: {
            title: 'Ваши ФИО',
            code: 'NAME',
            type: text,
            col: 12,
            required: true,
            // value: 'Тестов Кандидат Петрович',
          },
          fioPrevious: {
            title: 'ФИО до изменения',
            code: 'UF_CRM_14_FIO_PREV',
            type: text,
            col: 12,
            disabled: false,
            linkedField: 'fio',
            // value: '',
          },
          fioChanged: {
            title: 'Данные не менялись',
            code: '',
            type: radio,
            linkedField: 'fioPrevious',
            col: 12,
            // value: true,
          },
          addressRegistration: {
            title: 'Адрес регистрации',
            code: '',
            type: text,
            col: 12,
            required: true,
            // value: 'уд. Гродненская, д. 23',
          },
          addressFact: {
            title: 'Адрес фактического проживания',
            code: '',
            type: text,
            col: 12,
            required: true,
            disabled: false,
            linkedField: 'addressRegistration',
          },
          addressesSame: {
            title: 'Совпадает с адресом регистрации',
            code: '',
            type: radio,
            linkedField: 'addressFact',
            col: 12,
            // value: true,
          },
          phone: {
            title: 'Контактный телефон',
            code: '',
            type: phone,
            col: 6,
            required: true,
            // value: '+7 (707) 570 9446',
          },
          email: {
            title: 'Адрес электронной почты',
            code: '',
            type: email,
            col: 6,
            required: true,
            // value: 'test@exmple.com',
          },
        },
      },
    },
  },
  passport: {
    title: 'Паспортные данные',
    type: filled,
    subtitle: 'Заполните данные как в паспорте',
    sections: {
      0: {
        items: {
          dateBirth: {
            title: 'Дата рождения',
            code: '',
            type: date,
            col: 6,
            required: true,
            minDate: new Date(1920, 1, 1),
            maxDate: new Date(),
          },
          placeBirth: {
            title: 'Место рождения',
            code: '',
            type: text,
            col: 6,
            required: true,
          },
          serialNumber: {
            title: 'Серия и номер',
            code: '',
            type: text,
            col: 6,
            required: true,
          },
          dateOfIssue: {
            title: 'Дата выдачи',
            code: '',
            type: date,
            col: 6,
            required: true,
            minDate: new Date(1970, 1, 1),
            maxDate: new Date(),
          },
          issuedBy: {
            title: 'Кем выдан',
            code: '',
            type: textarea,
            col: 12,
            required: true,
          },
        },
      },
    },
  },
  additional: {
    title: 'Дополнительная информация',
    type: base,
    subtitle: 'Образование',
    sections: {
      0: {
        items: {
          mainEducation: {
            title: 'Основное образование',
            code: '',
            type: list,
            col: 12,
            required: false,
            options: [
              { code: "7092", id: 'student', label: 'студент', },
              { code: "7094", id: 'middle', label: 'среднее общее', },
              { code: "7096", id: 'middle-proffessional', label: 'среднее профессиональное', },
              { code: "7098", id: 'high', label: 'высшее/бакалавр', },
              { code: "7100", id: 'magistr', label: 'аспирантура/магистратура', },
            ],
            // value: { code: "7094", id: 'middle', label: 'среднее общее', },
          },
          laguageKnowledge: {
            title: 'Знание языков',
            code: '',
            type: text,
            col: 6,
            required: false,
            // value: 'English, Russion',
          },
          levelProficiency: {
            title: 'Уровень владения',
            code: '',
            type: list,
            col: 6,
            required: false,
            options: [
              { code: "7102", id: 'native', label: 'свободно', },
              { code: "7104", id: 'middle', label: 'средний уровень', },
              { code: "7106", id: 'basic', label: 'базовые знания', },
            ],
            // value: { code: "7104", id: 'middle', label: 'средний уровень', },
          },
        },
      },
    },
  },
  carLicense: {
    title: '',
    type: base,
    subtitle: 'Наличие водительских прав категории',
    sections: {
      0: {
        items: {
          carLicenseCategory: {
            title: 'Наличие водительских прав',
            code: '',
            type: radioGroup,
            col: 12,
            required: false,
            options: [
              { id: 'A', code: '7118', label: 'A' },
              { id: 'B', code: '7120', label: 'B' },
              { id: 'C', code: '7122', label: 'C' },
              { id: 'D', code: '7124', label: 'D' },
              { id: 'E', code: '7126', label: 'E' },
            ],
            // value: ['A', 'E'],
          },
        },
      },
    },
  },
  lawViolation: {
    title: '',
    type: base,
    subtitle: 'Привлекались ли Вы к административной/уголовной ответственности',
    sections: {
      0: {
        items: {
          lawViolationArticle: {
            title: 'Укажите статью',
            code: '',
            type: text,
            col: 12,
            required: true,
            disabled: false,
          },
          notLawViolation: {
            title: 'Не привлекался',
            code: '',
            type: radio,
            linkedField: 'lawViolationArticle',
            col: 12,
            required: false,
            // value: true,
          },
        },
      },
    },
  },
  sourceRecognition: {
    title: '',
    type: base,
    subtitle: 'Откуда узнали о вакансии',
    sections: {
      0: {
        items: {
          sourceRecognition: {
            title: 'Укажите источник',
            code: '',
            type: list,
            col: 12,
            required: false,
            options: [
              { id: 'invite', code: "7128", label: 'пригласил рекрутер', },
              { id: 'recommendation', code: "7130", label: 'по рекомендации', },
              { id: 'self', code: "7132", label: 'самостоятельно', },
            ],
            // value: { id: 'recommendation', code: "7130", label: 'по рекомендации', },
          },
        },
      },
    },
  },
  family: {
    title: 'Родственники',
    type: filled,
    subtitle: 'Контактное лицо №2',
    info: 'В случае отсутствия родственников, укажите контактные лица для связи',
    repeatable: true,
    canAdd: false,
    sections: {
      0: {
        title: 'Контактное лицо №1',
        items: {
          relativeDegree: {
            title: 'Степень родства',
            code: '',
            type: text,
            col: 12,
            required: true,
            // value: 'Брат',
          },
          relativeFio: {
            title: 'ФИО родственника',
            code: '',
            type: text,
            col: 12,
            required: true,
            // value: 'Иванов Виктор Петрович',
          },
          phone: {
            title: 'Контактный телефон',
            code: '',
            type: phone,
            col: 12,
            required: true,
            // value: '+7 (707) 570 9446',
          },
        },
      },
      1: {
        title: 'Контактное лицо №2',
        items: {
          relativeDegree: {
            title: 'Степень родства',
            code: '',
            type: text,
            col: 12,
            required: false,
            // value: 'Отец',
          },
          relativeFio: {
            title: 'ФИО родственника',
            code: '',
            type: text,
            col: 12,
            required: false,
            // value: 'Иванов Андрей Петрович',
          },
          phone: {
            title: 'Контактный телефон',
            code: '',
            type: phone,
            col: 12,
            required: false,
          },
        },
      },
    },
  },
  experience: {
    title: 'Профессиональный опыт',
    type: filled,
    subtitle: 'Место работы',
    info: 'Необходимо заполнить в случае отсутствия резюме',
    repeatable: true,
    canAdd: true,
    addButtonLabel: 'Добавить место работы',
    sections: {
      0: {
        title: 'Последнее место работы',
        items: {
          companyName: {
            title: 'Наименование организации',
            code: '',
            type: text,
            col: 12,
            required: false,
            // value: 'Компания 1',
          },
          positionAtWork: {
            title: 'Занимаемая должность',
            code: '',
            type: text,
            col: 12,
            required: false,
            // value: 'Верстальщик',
          },
          periodOfWork: {
            title: 'Период работы',
            code: '',
            type: dateMulti,
            col: 12,
            required: false,
            minDate: new Date(1970, 1, 1),
            maxDate: new Date(),
          },
          reasonForDismissal: {
            title: 'Причина увольнения',
            code: '',
            type: text,
            col: 12,
            required: false,
            // value: 'Заставили',
          },
        },
      },
    },
  },
  recommendation: {
    title: 'Рекомендации',
    type: filled,
    subtitle: 'Контактное лицо',
    info: 'Укажите контактное лицо, кто сможет дать о вас рекомендаии',
    repeatable: true,
    canAdd: true,
    addButtonLabel: 'Добавить рекомендацию',
    sections: {
      0: {
        title: 'Контактное лицо',
        items: {
          contactFio: {
            title: 'ФИО',
            code: '',
            type: text,
            col: 12,
            required: false,
            // value: 'Игорь Леонидович',
          },
          phone: {
            title: 'Контактный телефон',
            code: '',
            type: phone,
            col: 12,
            required: false,
            // value: '+7 (777) 323 3456',
          },
          positionAtWork: {
            title: 'Занимаемая должность',
            code: '',
            type: text,
            col: 12,
            required: false,
            // value: 'Пожарник',
          },
        },
      },
    },
  },
  documents: {
    title: 'Документы',
    type: base,
    subtitle: '',
    info: '',
    repeatable: false,
    repeatCountDefault: 0,
    canAdd: false,
    sections: {
      0: {
        items: {
          documents: {
            title: 'Документы',
            code: '',
            type: file,
            col: 12,
            required: false,
          },
        },
      },
    },
  },
};

export { schema };
