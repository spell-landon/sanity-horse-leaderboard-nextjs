import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'rider',
  title: 'Rider',
  type: 'document',
  fields: [
    defineField({
      name: 'riderName',
      title: 'Rider Name',
      type: 'string',
    }),
    defineField({
      name: 'riderNumber',
      title: 'Rider Number',
      type: 'string',
    }),
    defineField({
      name: 'horseName',
      title: 'Horse Name',
      type: 'string',
    }),
    defineField({
      name: 'horseBreed',
      title: 'Horse Breed',
      type: 'string',
    }),
    defineField({
      name: 'horseAge',
      title: 'Horse Age',
      type: 'string',
    }),

    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'AA', value: 'AA'},
          {title: 'A', value: 'A'},
          {title: 'B1', value: 'B1'},
          {title: 'B2', value: 'B2'},
        ],
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'division',
      title: 'Division',
      type: 'string',
      options: {
        list: [
          {title: 'Open', value: 'Open'},
          {title: 'CP', value: 'CP'},
          {title: 'Nov', value: 'Nov'},
        ],
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'class',
      title: 'Class',
      type: 'string',
      options: {
        list: [
          {title: 'HWT', value: 'HWT'},
          {title: 'LWT', value: 'LWT'},
          {title: 'JR', value: 'JR'},
        ],
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'horsemanshipScorecard',
      title: 'Horsemanship Scorecard',
      type: 'reference',
      to: [{type: 'horsemanshipScorecard'}],
    }),
  ],
  preview: {
    select: {
      title: 'riderName',
      riderNumber: 'riderNumber',
    },
    prepare: ({title, riderNumber}) => {
      const subtitle = `Rider #: ${riderNumber}`
      return {
        title,
        subtitle: subtitle,
      }
    },
  },
})
