import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'horsemanshipScorecard',
  title: 'Horsemanship Scorecard',
  type: 'document',
  fields: [
    defineField({
      name: 'riderName',
      title: 'Rider Name',
      type: 'reference',
      to: [{type: 'rider'}],
    }),
    defineField({
      name: 'qualifiers',
      title: 'Qualifiers',
      type: 'object',
      fields: [
        {
          name: 'general',
          title: 'General',
          type: 'object',
          fields: [
            {
              name: 'tackAndEquipment',
              title: 'Tack And Equipment',
              type: 'text',
              //   readOnly
            },
            {
              name: 'grooming',
              title: 'Grooming',
              type: 'text',
              //   readOnly
            },
            {
              name: 'inHandPresentation',
              title: 'In-Hand Presentation',
              type: 'text',
              //   readOnly
            },
            {
              name: 'score',
              title: 'Score',
              type: 'string',
              //   readOnly
            },
          ],
        },
        {
          name: 'form',
          title: 'Form',
          type: 'object',
          fields: [
            {
              name: 'trailEquitation',
              title: 'Trail Equitation',
              type: 'text',
            },
            {
              name: 'score',
              title: 'Score',
              type: 'string',
              //   readOnly
            },
          ],
        },
        {
          name: 'trail',
          title: 'Trail',
          type: 'object',
          fields: [
            {
              name: 'trailSafetyAndCourtesy',
              title: 'Trail Safety And Courtesy',
              type: 'text',
            },
            {
              name: 'stabling',
              title: 'Stabling',
              type: 'text',
            },
            {
              name: 'trailCare',
              title: 'Trail Care',
              type: 'text',
            },
            {
              name: 'score',
              title: 'Score',
              type: 'string',
              //   readOnly
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'scoreSubtotal',
      title: 'Score Subtotal',
      type: 'string',
      // readOnly
    }),
    defineField({
      name: 'penalty',
      title: 'Penalty',
      type: 'object',
      fields: [
        {
          name: 'penaltyPointExplanation',
          title: 'Penalty Point Explanation',
          type: 'text',
          // readOnly
        },
        {
          name: 'penaltyPoints',
          title: 'Penalty Points',
          type: 'string',
          // readOnly
        },
      ],
      // readOnly
    }),
    defineField({
      name: 'overallScore',
      title: 'Overall Score',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'riderName.riderName',
    },
    prepare: ({title}) => {
      const text = `${title}'s Horsemanship Scorecard`
      return {title: text}
    },
  },
})
