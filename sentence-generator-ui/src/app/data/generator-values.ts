export interface GeneratorValues {
    sentencetype: {
        value: string,
        required: boolean
      },
      subject: {
        value: string,
        required: boolean
      },
      verb: {
        value: string,
        required: boolean
      },
      object: {
        value: string,
        required: boolean
      },
      tense: {
        value: string,
        required: boolean
      },
      negated: {
        value: boolean,
        required: boolean
      }
}
