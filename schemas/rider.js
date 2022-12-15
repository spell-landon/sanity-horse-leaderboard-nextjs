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
      //   readOnly
    }),
    defineField({
      name: 'riderNumber',
      title: 'Rider Number',
      type: 'string',
      //   readOnly
    }),
    defineField({
      name: 'horseName',
      title: 'Horse Name',
      type: 'string',
      //   readOnly
    }),
    defineField({
      name: 'horseBreed',
      title: 'Horse Breed',
      type: 'string',
      //   readOnly
    }),
    defineField({
      name: 'horseAge',
      title: 'Horse Age',
      type: 'string',
      //   readOnly
    }),

    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'AA', value: 'aa'},
          {title: 'A', value: 'a'},
          {title: 'B1', value: 'b1'},
          {title: 'B2', value: 'b2'},
        ],
        layout: 'dropdown',
      },
      //   readOnly
    }),
    defineField({
      name: 'division',
      title: 'Division',
      type: 'string',
      options: {
        list: [
          {title: 'Open', value: 'open'},
          {title: 'CP', value: 'cp'},
          {title: 'Nov', value: 'nov'},
        ],
        layout: 'dropdown',
      },
      //   readOnly
    }),
    defineField({
      name: 'class',
      title: 'Class',
      type: 'string',
      options: {
        list: [
          {title: 'HWT', value: 'hwt'},
          {title: 'LWT', value: 'lwt'},
          {title: 'JR', value: 'jr'},
        ],
        layout: 'dropdown',
      },
      //   readOnly
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
