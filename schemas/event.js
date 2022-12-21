import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
    }),
    defineField({
      name: 'region',
      title: 'Region',
      type: 'string',
    }),
    defineField({
      name: 'judges',
      title: 'Judges',
      type: 'object',
      fields: [
        {
          name: 'vet',
          title: 'Vet',
          type: 'array',
          of: [{type: 'string'}],
        },
        {
          name: 'hsp',
          title: 'HSP',
          type: 'array',
          of: [{type: 'string'}],
        },
      ],
    }),
    defineField({
      name: 'riders',
      title: 'Riders',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'rider'}],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
