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
            },
            {
              name: 'grooming',
              title: 'Grooming',
              type: 'text',
            },
            {
              name: 'inHandPresentation',
              title: 'In-Hand Presentation',
              type: 'text',
            },
            {
              name: 'generalScore',
              title: 'General Score',
              type: 'string',
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
              name: 'formScore',
              title: 'Form Score',
              type: 'string',
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
              name: 'trailScore',
              title: 'Trail Score',
              type: 'string',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'scoreSubtotal',
      title: 'Score Subtotal',
      type: 'string',
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
        },
        {
          name: 'penaltyPoints',
          title: 'Penalty Points',
          type: 'string',
        },
      ],
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
