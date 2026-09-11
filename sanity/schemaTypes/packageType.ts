import { defineType, defineField } from 'sanity'

export const packageType = defineType({
  name: 'package',
  title: 'Package',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Hajj & Umrah', value: 'hajj-umrah' },
          { title: 'Visa', value: 'visa' },
          { title: 'International', value: 'international' },
          { title: 'Domestic', value: 'domestic' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subCategory',
      title: 'Sub Category',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'All', value: 'all' },
          { title: 'Business', value: 'business' },
          { title: 'Honeymoon', value: 'honeymoon' },
          { title: 'Family', value: 'family' },
          { title: 'Group', value: 'group' },
          { title: 'Luxury', value: 'luxury' },
          { title: 'Popular', value: 'popular' },
          { title: 'Couples', value: 'couples' },
        ],
      },
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'includes',
      title: 'Includes',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'requiredDocuments',
      title: 'Required Documents',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'hotels',
      title: 'Hotels',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'rating', title: 'Rating (1-5)', type: 'number' },
            { name: 'duration', title: 'Duration (e.g. 2 Nights)', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'amountBreakdown',
      title: 'Amount Breakdown',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'amount', title: 'Amount', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'totalAmount',
      title: 'Total Amount',
      type: 'string',
    }),
    defineField({
      name: 'visaDetails',
      title: 'Visa Details',
      type: 'text',
    }),
    defineField({
      name: 'location',
      title: 'Location (for Domestic)',
      type: 'string',
    }),
    defineField({
      name: 'country',
      title: 'Country (for International)',
      type: 'string',
    }),
    defineField({
      name: 'tag',
      title: 'Tag / Badge',
      type: 'string',
    }),
    defineField({
      name: 'rating',
      title: 'Average Rating',
      type: 'number',
    }),
    defineField({
      name: 'reviews',
      title: 'Number of Reviews',
      type: 'number',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline (for Top Destinations)',
      type: 'string',
    }),
    defineField({
      name: 'bestSeason',
      title: 'Best Season (for Top Destinations)',
      type: 'string',
    }),
    // Toggles for landing page
    defineField({
      name: 'showInTopDestinations',
      title: 'Show in Top Destinations',
      type: 'boolean',
      initialValue: false,
      group: 'visibility',
    }),
    defineField({
      name: 'showInInternationalPackages',
      title: 'Show in International Packages',
      type: 'boolean',
      initialValue: false,
      group: 'visibility',
    }),
    defineField({
      name: 'showInDomesticPackages',
      title: 'Show in Domestic Packages',
      type: 'boolean',
      initialValue: false,
      group: 'visibility',
    }),
  ],
  groups: [
    {
      name: 'visibility',
      title: 'Landing Page Visibility',
    },
  ],
})
