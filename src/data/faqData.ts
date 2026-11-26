export interface BilingualFaqItem {
  id: string;
  questionEn: string;
  answerEn: string;
  questionUr: string;
  answerUr: string;
}

export const MAIN_FAQS: BilingualFaqItem[] = [
  {
    id: 'full-truckload-only',
    questionEn: 'Do you handle small parcels or loose packages?',
    answerEn:
      'No, we only book full dedicated trucks. The entire vehicle is reserved for your goods, so nothing is mixed with other shipments.',
    questionUr: 'کیا وڑائچ گڈز ٹرانسپورٹ کمپنی چھوٹے پارسل یا کچا مال مکس کرتی ہے؟',
    answerUr:
      'نہیں، ہم صرف پوری گاڑی (فل لوڈ) بک کرتے ہیں۔ پوری گاڑی صرف آپ کے مال کے لیے مخصوص ہوتی ہے اور مال مکس نہیں ہوتا۔',
  },
  {
    id: 'freight-rate-calculation',
    questionEn: 'How are freight rates calculated?',
    answerEn:
      'Rates depend on the travel distance between cities, the truck size you need, and your cargo type. We provide clear rates with no hidden costs.',
    questionUr: 'کرایہ کا تعین کیسے ہوتا ہے؟',
    answerUr:
      'کرایہ کا تعین شہروں کے درمیانی فاصلے، مطلوبہ گاڑی کے سائز اور سامان کی قسم کے مطابق ہوتا ہے۔ کوئی پوشیدہ چارجز نہیں ہوتے۔',
  },
  {
    id: 'weather-protection',
    questionEn: 'Do you protect cargo from rain and dust?',
    answerEn:
      'Yes. All our trucks carry heavy waterproof tarpaulins and strong ropes to protect your goods in all weather conditions.',
    questionUr: 'کیا بارش اور خراب موسم میں مال کی حفاظت کا انتظام ہوتا ہے؟',
    answerUr:
      'جی بالکل! ہماری تمام گاڑیوں پر مضبوط واٹر پروف ترپالیں اور مضبوط رسیاں موجود ہوتی ہیں۔ بارش اور گرد و غبار سے سامان کا مکمل تحفظ یقینی بنایا جاتا ہے۔',
  },
  {
    id: 'how-to-book',
    questionEn: 'How can I book a truck for house shifting or commercial delivery?',
    answerEn:
      'Use the Call or WhatsApp buttons in our homepage hero, the floating WhatsApp button, or our Rates & Booking page anytime to share your route and load details for a quick quote.',
    questionUr: 'گھریلو شفٹنگ یا مال برداری کے لیے گاڑی کیسے بک کریں؟',
    answerUr:
      'آپ کسی بھی وقت ہوم پیج کے ہیرو سیکشن یا فلوٹنگ واٹس ایپ بٹن سے رابطہ کر کے یا کرایہ و بکنگ فارم کے ذریعے اپنا روٹ اور سامان بتا کر گاڑی بک کر سکتے ہیں۔',
  },
  {
    id: 'fleet-types',
    questionEn: 'What types of trucks are in your fleet?',
    answerEn:
      'We have Shahzore pickups (1 to 3.5 tons), Mazda 6-wheeler trucks (4 to 10 tons), Sample trucks (8 to 16 tons), and heavy Bedford haulers (15 to 28+ tons).',
    questionUr: 'آپ کے پاس کون کون سی گاڑیاں دستیاب ہیں؟',
    answerUr:
      'ہمارے پاس شہزور پک اپ (1 تا 3.5 ٹن)، مزدا 6 وہیلر (4 تا 10 ٹن)، سیمپل ٹرک (8 تا 16 ٹن) اور بڑے بیڈفورڈ ٹرکس دستیاب ہیں۔',
  },
  {
    id: 'bilty-and-weighbridge',
    questionEn: 'Do you provide bilty receipts and weighbridge slips?',
    answerEn:
      'Yes. Every shipment includes a bilty receipt with consignment details and computerized weighbridge scale slips.',
    questionUr: 'کیا بلٹی اور کانٹا پرچی دی جاتی ہے؟',
    answerUr:
      'جی ہاں، ہر مال کی روانگی پر باقاعدہ کمپیوٹرائزڈ کانٹا پرچی اور تصدیق شدہ بلٹی رسید دی جاتی ہے۔',
  },
];
