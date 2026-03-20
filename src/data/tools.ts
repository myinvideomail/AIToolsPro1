export type Category = 
  | 'Writing'
  | 'Students'
  | 'Business'
  | 'Social Media'
  | 'Career'
  | 'Development'
  | 'Creative'
  | 'Lifestyle'
  | 'Marketing'
  | 'SEO'
  | 'E-commerce'
  | 'Real Estate'
  | 'HR'
  | 'Video'
  | 'Sales'
  | 'Finance'
  | 'Productivity'
  | 'Legal'
  | 'Podcasting'
  | 'Gaming'
  | 'Health & Fitness'
  | 'Travel'
  | 'Event Planning'
  | 'Design'
  | 'Other';

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: Category;
  icon: string;
  promptTemplate: string;
  inputPlaceholder: string;
  inputLabel: string;
  isCustom?: boolean;
}

export const categories: Category[] = [
  'Writing',
  'Students',
  'Business',
  'Social Media',
  'Career',
  'Development',
  'Creative',
  'Lifestyle',
  'Marketing',
  'SEO',
  'E-commerce',
  'Real Estate',
  'HR',
  'Video',
  'Sales',
  'Finance',
  'Productivity',
  'Legal',
  'Podcasting',
  'Gaming',
  'Health & Fitness',
  'Travel',
  'Event Planning',
  'Design',
  'Other'
];

export const tools: Tool[] = [
  // Writing
  { id: 'article-writer', name: 'Article Writer', description: 'Generate a full article from a topic.', category: 'Writing', icon: 'FileText', promptTemplate: 'Write a comprehensive, engaging article about: {input}', inputPlaceholder: 'Topic...', inputLabel: 'Topic' },
  { id: 'paragraph-expander', name: 'Paragraph Expander', description: 'Expand a short sentence into a detailed paragraph.', category: 'Writing', icon: 'Maximize', promptTemplate: 'Expand the following sentence into a detailed, well-written paragraph: {input}', inputPlaceholder: 'Short sentence...', inputLabel: 'Sentence' },
  { id: 'text-summarizer', name: 'Text Summarizer', description: 'Summarize long text into key points.', category: 'Writing', icon: 'Minimize', promptTemplate: 'Summarize the following text into 3-5 key bullet points: {input}', inputPlaceholder: 'Long text...', inputLabel: 'Text' },
  { id: 'grammar-checker', name: 'Grammar Checker', description: 'Fix grammar and spelling errors.', category: 'Writing', icon: 'CheckCircle', promptTemplate: 'Fix all grammar, spelling, and punctuation errors in the following text: {input}', inputPlaceholder: 'Text with errors...', inputLabel: 'Text' },
  { id: 'tone-changer', name: 'Tone Changer', description: 'Change the tone of your text (e.g., to professional, casual).', category: 'Writing', icon: 'MessageSquare', promptTemplate: 'Rewrite the following text to sound more professional and polite: {input}', inputPlaceholder: 'Text...', inputLabel: 'Text' },
  { id: 'creative-story', name: 'Story Generator', description: 'Generate a creative short story.', category: 'Writing', icon: 'BookOpen', promptTemplate: 'Write a creative short story based on this prompt: {input}', inputPlaceholder: 'Story prompt...', inputLabel: 'Prompt' },
  { id: 'poem-generator', name: 'Poem Generator', description: 'Write a poem about any topic.', category: 'Writing', icon: 'Feather', promptTemplate: 'Write a beautiful poem about: {input}', inputPlaceholder: 'Topic...', inputLabel: 'Topic' },
  { id: 'blog-title-generator', name: 'Blog Title Generator', description: 'Generate catchy blog titles.', category: 'Writing', icon: 'Type', promptTemplate: 'Generate 10 catchy and SEO-friendly blog titles for an article about: {input}', inputPlaceholder: 'Topic...', inputLabel: 'Topic' },
  { id: 'blog-intro-generator', name: 'Blog Intro Generator', description: 'Write an engaging introduction for your blog post.', category: 'Writing', icon: 'AlignLeft', promptTemplate: 'Write an engaging and hook-driven introduction paragraph for a blog post about: {input}', inputPlaceholder: 'Topic...', inputLabel: 'Topic' },
  { id: 'paraphraser', name: 'Paraphraser', description: 'Rephrase text to avoid plagiarism.', category: 'Writing', icon: 'RefreshCw', promptTemplate: 'Paraphrase the following text to make it unique while retaining the original meaning: {input}', inputPlaceholder: 'Text to paraphrase...', inputLabel: 'Text' },
  
  // Students
  { id: 'homework-solver', name: 'Homework Solver', description: 'Get step-by-step solutions for homework.', category: 'Students', icon: 'GraduationCap', promptTemplate: 'Provide a step-by-step solution and explanation for this homework question: {input}', inputPlaceholder: 'Question...', inputLabel: 'Question' },
  { id: 'essay-outliner', name: 'Essay Outliner', description: 'Create a structured outline for an essay.', category: 'Students', icon: 'List', promptTemplate: 'Create a detailed outline for an academic essay about: {input}', inputPlaceholder: 'Essay topic...', inputLabel: 'Topic' },
  { id: 'study-notes', name: 'Study Notes Generator', description: 'Generate concise study notes from a topic.', category: 'Students', icon: 'Book', promptTemplate: 'Generate concise, easy-to-understand study notes with key concepts for: {input}', inputPlaceholder: 'Topic...', inputLabel: 'Topic' },
  { id: 'math-solver', name: 'Math Problem Solver', description: 'Solve math equations with explanations.', category: 'Students', icon: 'Calculator', promptTemplate: 'Solve this math problem step-by-step: {input}', inputPlaceholder: 'Math equation...', inputLabel: 'Equation' },
  { id: 'flashcard-generator', name: 'Flashcard Generator', description: 'Create Q&A flashcards for studying.', category: 'Students', icon: 'Layers', promptTemplate: 'Create 10 study flashcards (Question and Answer format) about: {input}', inputPlaceholder: 'Topic...', inputLabel: 'Topic' },
  { id: 'thesis-generator', name: 'Thesis Statement Generator', description: 'Generate a strong thesis statement.', category: 'Students', icon: 'Target', promptTemplate: 'Generate 3 strong, arguable thesis statements for an essay about: {input}', inputPlaceholder: 'Topic...', inputLabel: 'Topic' },
  { id: 'concept-explainer', name: 'Explain Like I\'m 5', description: 'Explain complex concepts simply.', category: 'Students', icon: 'Lightbulb', promptTemplate: 'Explain the following complex concept in simple terms, as if I were 5 years old: {input}', inputPlaceholder: 'Complex concept...', inputLabel: 'Concept' },
  { id: 'citation-generator', name: 'Citation Generator', description: 'Generate APA/MLA citations.', category: 'Students', icon: 'Quote', promptTemplate: 'Generate APA and MLA citations for the following book/article details: {input}', inputPlaceholder: 'Author, Title, Year...', inputLabel: 'Details' },
  { id: 'language-tutor', name: 'Language Tutor', description: 'Learn phrases and grammar in another language.', category: 'Students', icon: 'Languages', promptTemplate: 'Act as a language tutor. Translate this to Spanish, French, and Japanese, and explain the grammar: {input}', inputPlaceholder: 'Phrase...', inputLabel: 'Phrase' },
  { id: 'science-explainer', name: 'Science Explainer', description: 'Understand scientific phenomena.', category: 'Students', icon: 'FlaskConical', promptTemplate: 'Explain the science behind this phenomenon clearly: {input}', inputPlaceholder: 'Phenomenon...', inputLabel: 'Phenomenon' },

  // Business
  { id: 'email-writer', name: 'Email Writer', description: 'Write professional business emails.', category: 'Business', icon: 'Mail', promptTemplate: 'Write a professional business email regarding: {input}', inputPlaceholder: 'Email topic...', inputLabel: 'Topic' },
  { id: 'business-name', name: 'Business Name Generator', description: 'Brainstorm names for your company.', category: 'Business', icon: 'Building', promptTemplate: 'Brainstorm 10 creative and catchy business names for a company that does: {input}', inputPlaceholder: 'Business idea...', inputLabel: 'Idea' },
  { id: 'product-description', name: 'Product Description', description: 'Write descriptions for e-commerce.', category: 'Business', icon: 'ShoppingBag', promptTemplate: 'Write a compelling, SEO-friendly product description for: {input}', inputPlaceholder: 'Product details...', inputLabel: 'Product' },
  { id: 'pitch-deck', name: 'Pitch Deck Outline', description: 'Create an outline for a startup pitch deck.', category: 'Business', icon: 'Presentation', promptTemplate: 'Create a 10-slide pitch deck outline for a startup that does: {input}', inputPlaceholder: 'Startup idea...', inputLabel: 'Idea' },
  { id: 'swot-analysis', name: 'SWOT Analysis', description: 'Generate a SWOT analysis for a business.', category: 'Business', icon: 'PieChart', promptTemplate: 'Generate a detailed SWOT (Strengths, Weaknesses, Opportunities, Threats) analysis for: {input}', inputPlaceholder: 'Company or product...', inputLabel: 'Company/Product' },
  { id: 'job-description', name: 'Job Description Generator', description: 'Write a job posting.', category: 'Business', icon: 'Briefcase', promptTemplate: 'Write a comprehensive job description for the following role: {input}', inputPlaceholder: 'Job title and key skills...', inputLabel: 'Role' },
  { id: 'interview-questions', name: 'Interview Questions', description: 'Generate questions to ask candidates.', category: 'Business', icon: 'Users', promptTemplate: 'Generate 10 insightful interview questions to ask a candidate applying for: {input}', inputPlaceholder: 'Job title...', inputLabel: 'Job Title' },
  { id: 'press-release', name: 'Press Release Writer', description: 'Write a professional press release.', category: 'Business', icon: 'Newspaper', promptTemplate: 'Write a professional press release announcing: {input}', inputPlaceholder: 'Announcement details...', inputLabel: 'Details' },
  { id: 'meeting-agenda', name: 'Meeting Agenda', description: 'Create a structured meeting agenda.', category: 'Business', icon: 'Calendar', promptTemplate: 'Create a structured, time-boxed meeting agenda for a meeting about: {input}', inputPlaceholder: 'Meeting topic...', inputLabel: 'Topic' },
  { id: 'value-proposition', name: 'Value Proposition', description: 'Define your unique value proposition.', category: 'Business', icon: 'Award', promptTemplate: 'Write a clear and compelling unique value proposition (UVP) for: {input}', inputPlaceholder: 'Product/Service...', inputLabel: 'Product/Service' },

  // Social Media
  { id: 'tweet-generator', name: 'Tweet Generator', description: 'Generate engaging tweets.', category: 'Social Media', icon: 'Twitter', promptTemplate: 'Write 3 engaging tweets about: {input}', inputPlaceholder: 'Topic...', inputLabel: 'Topic' },
  { id: 'instagram-caption', name: 'Instagram Caption', description: 'Create captions with hashtags.', category: 'Social Media', icon: 'Instagram', promptTemplate: 'Write 3 catchy Instagram captions with relevant emojis and hashtags for a photo of: {input}', inputPlaceholder: 'Photo description...', inputLabel: 'Description' },
  { id: 'youtube-title', name: 'YouTube Title', description: 'Generate click-worthy video titles.', category: 'Social Media', icon: 'Youtube', promptTemplate: 'Generate 10 click-worthy, high-retention YouTube video titles about: {input}', inputPlaceholder: 'Video topic...', inputLabel: 'Topic' },
  { id: 'youtube-description', name: 'YouTube Description', description: 'Write SEO-optimized video descriptions.', category: 'Social Media', icon: 'AlignJustify', promptTemplate: 'Write an SEO-optimized YouTube video description including a hook, summary, and placeholder links for a video about: {input}', inputPlaceholder: 'Video topic...', inputLabel: 'Topic' },
  { id: 'linkedin-post', name: 'LinkedIn Post', description: 'Write professional LinkedIn updates.', category: 'Social Media', icon: 'Linkedin', promptTemplate: 'Write an engaging, professional LinkedIn post about: {input}', inputPlaceholder: 'Topic or achievement...', inputLabel: 'Topic' },
  { id: 'tiktok-ideas', name: 'TikTok Video Ideas', description: 'Brainstorm viral TikTok concepts.', category: 'Social Media', icon: 'Video', promptTemplate: 'Brainstorm 5 viral TikTok video ideas and scripts for a creator in this niche: {input}', inputPlaceholder: 'Niche...', inputLabel: 'Niche' },
  { id: 'hashtag-generator', name: 'Hashtag Generator', description: 'Generate trending hashtags.', category: 'Social Media', icon: 'Hash', promptTemplate: 'Generate 30 highly relevant and trending hashtags for a post about: {input}', inputPlaceholder: 'Topic...', inputLabel: 'Topic' },
  { id: 'pinterest-pin', name: 'Pinterest Pin Description', description: 'Write descriptions for Pinterest.', category: 'Social Media', icon: 'Image', promptTemplate: 'Write an SEO-friendly Pinterest pin description with keywords for: {input}', inputPlaceholder: 'Pin topic...', inputLabel: 'Topic' },
  { id: 'facebook-ad', name: 'Facebook Ad Copy', description: 'Write converting ad copy.', category: 'Social Media', icon: 'Megaphone', promptTemplate: 'Write compelling, high-converting Facebook ad copy (Primary Text, Headline, Description) for: {input}', inputPlaceholder: 'Product/Offer...', inputLabel: 'Offer' },
  { id: 'social-calendar', name: 'Content Calendar', description: 'Plan a week of social content.', category: 'Social Media', icon: 'CalendarDays', promptTemplate: 'Create a 7-day social media content calendar with post ideas for: {input}', inputPlaceholder: 'Brand/Niche...', inputLabel: 'Brand/Niche' },

  // Marketing
  { id: 'seo-keywords', name: 'SEO Keywords', description: 'Generate keywords for your niche.', category: 'Marketing', icon: 'Search', promptTemplate: 'Generate a list of 20 long-tail SEO keywords for the niche: {input}', inputPlaceholder: 'Niche...', inputLabel: 'Niche' },
  { id: 'slogan-generator', name: 'Slogan Generator', description: 'Create catchy brand slogans.', category: 'Marketing', icon: 'Mic', promptTemplate: 'Generate 10 catchy slogans for: {input}', inputPlaceholder: 'Brand...', inputLabel: 'Brand' },
  { id: 'landing-page-copy', name: 'Landing Page Copy', description: 'Write copy for a landing page.', category: 'Marketing', icon: 'Layout', promptTemplate: 'Write high-converting landing page copy (Hero, Benefits, CTA) for: {input}', inputPlaceholder: 'Product...', inputLabel: 'Product' },
  { id: 'email-subject', name: 'Email Subject Lines', description: 'Generate high open-rate subject lines.', category: 'Marketing', icon: 'MailOpen', promptTemplate: 'Generate 10 catchy, high open-rate email subject lines for an email about: {input}', inputPlaceholder: 'Email topic...', inputLabel: 'Topic' },
  { id: 'buyer-persona', name: 'Buyer Persona', description: 'Create a detailed buyer persona.', category: 'Marketing', icon: 'UserCircle', promptTemplate: 'Create a detailed buyer persona (demographics, pain points, goals) for a product that: {input}', inputPlaceholder: 'Product description...', inputLabel: 'Product' },

  // SEO
  { id: 'meta-description', name: 'Meta Description Generator', description: 'Write click-optimized meta descriptions.', category: 'SEO', icon: 'Globe', promptTemplate: 'Write 3 SEO-optimized meta descriptions (under 160 characters) for a page about: {input}', inputPlaceholder: 'Page topic or title...', inputLabel: 'Page Topic' },
  { id: 'keyword-clusterer', name: 'Keyword Clusterer', description: 'Group keywords into topical clusters.', category: 'SEO', icon: 'Network', promptTemplate: 'Group the following list of keywords into logical topical clusters for an SEO content strategy: {input}', inputPlaceholder: 'Comma-separated keywords...', inputLabel: 'Keywords' },
  { id: 'backlink-strategy', name: 'Backlink Strategy', description: 'Generate ideas for acquiring backlinks.', category: 'SEO', icon: 'Link', promptTemplate: 'Generate a creative and actionable backlink acquisition strategy for a website in this niche: {input}', inputPlaceholder: 'Website niche...', inputLabel: 'Niche' },

  // E-commerce
  { id: 'amazon-listing', name: 'Amazon Listing Optimizer', description: 'Optimize Amazon product titles and bullets.', category: 'E-commerce', icon: 'ShoppingCart', promptTemplate: 'Create an optimized Amazon product title and 5 benefit-driven bullet points for: {input}', inputPlaceholder: 'Product details...', inputLabel: 'Product Details' },
  { id: 'shopify-description', name: 'Shopify Description', description: 'Write engaging Shopify product descriptions.', category: 'E-commerce', icon: 'Store', promptTemplate: 'Write an engaging, brand-focused Shopify product description that highlights benefits over features for: {input}', inputPlaceholder: 'Product details...', inputLabel: 'Product Details' },
  { id: 'return-policy', name: 'Return Policy Generator', description: 'Draft a clear return and refund policy.', category: 'E-commerce', icon: 'RefreshCcw', promptTemplate: 'Draft a clear, customer-friendly return and refund policy based on these parameters: {input}', inputPlaceholder: 'e.g., 30 days, buyer pays return shipping...', inputLabel: 'Policy Parameters' },

  // Real Estate
  { id: 'property-listing', name: 'Property Listing Description', description: 'Write captivating real estate listings.', category: 'Real Estate', icon: 'Home', promptTemplate: 'Write a captivating and professional real estate property listing description highlighting these features: {input}', inputPlaceholder: 'Property features (e.g., 3 bed, 2 bath, pool)...', inputLabel: 'Property Features' },
  { id: 'neighborhood-guide', name: 'Neighborhood Guide', description: 'Create a guide for a specific neighborhood.', category: 'Real Estate', icon: 'MapPin', promptTemplate: 'Write an appealing neighborhood guide highlighting the best aspects, schools, and lifestyle of: {input}', inputPlaceholder: 'Neighborhood/City name...', inputLabel: 'Location' },
  { id: 'open-house-email', name: 'Open House Invite', description: 'Draft an email invite for an open house.', category: 'Real Estate', icon: 'Mail', promptTemplate: 'Draft an engaging email invitation for an upcoming open house event with these details: {input}', inputPlaceholder: 'Date, time, address, key features...', inputLabel: 'Event Details' },

  // HR
  { id: 'offer-letter', name: 'Offer Letter Generator', description: 'Draft a professional job offer letter.', category: 'HR', icon: 'FileCheck', promptTemplate: 'Draft a professional job offer letter including salary, start date, and role details for: {input}', inputPlaceholder: 'Candidate name, role, salary, start date...', inputLabel: 'Offer Details' },
  { id: 'rejection-email', name: 'Rejection Email', description: 'Write a polite candidate rejection email.', category: 'HR', icon: 'MailX', promptTemplate: 'Write a polite, professional, and empathetic candidate rejection email for the role of: {input}', inputPlaceholder: 'Job role...', inputLabel: 'Role' },
  { id: 'onboarding-plan', name: 'Onboarding Plan', description: 'Create a 30-day employee onboarding plan.', category: 'HR', icon: 'ClipboardList', promptTemplate: 'Create a structured 30-day onboarding plan for a new hire in this role: {input}', inputPlaceholder: 'Job role...', inputLabel: 'Role' },

  // Video
  { id: 'youtube-script', name: 'YouTube Script Writer', description: 'Write a full script for a YouTube video.', category: 'Video', icon: 'Clapperboard', promptTemplate: 'Write a detailed, engaging YouTube video script (including visual cues and dialogue) about: {input}', inputPlaceholder: 'Video topic...', inputLabel: 'Topic' },
  { id: 'tiktok-hook', name: 'TikTok Hook Generator', description: 'Generate scroll-stopping hooks for short-form video.', category: 'Video', icon: 'PlayCircle', promptTemplate: 'Generate 10 scroll-stopping, highly engaging hooks (first 3 seconds) for a TikTok/Reels video about: {input}', inputPlaceholder: 'Video topic...', inputLabel: 'Topic' },
  { id: 'video-storyboard', name: 'Storyboard Generator', description: 'Create a scene-by-scene storyboard.', category: 'Video', icon: 'Film', promptTemplate: 'Create a detailed, scene-by-scene storyboard description for a short promotional video about: {input}', inputPlaceholder: 'Product or campaign...', inputLabel: 'Campaign Details' },

  // Development
  { id: 'code-explainer', name: 'Code Explainer', description: 'Explain code snippets.', category: 'Development', icon: 'Code', promptTemplate: 'Explain this code snippet in plain English: {input}', inputPlaceholder: 'Code...', inputLabel: 'Code' },
  { id: 'bug-fixer', name: 'Bug Fixer', description: 'Find and fix bugs in code.', category: 'Development', icon: 'Bug', promptTemplate: 'Find the bug in this code, fix it, and explain the issue: {input}', inputPlaceholder: 'Buggy code...', inputLabel: 'Code' },
  { id: 'sql-generator', name: 'SQL Generator', description: 'Generate SQL queries from text.', category: 'Development', icon: 'Database', promptTemplate: 'Write an SQL query for this request: {input}', inputPlaceholder: 'Query description...', inputLabel: 'Description' },
  { id: 'regex-generator', name: 'Regex Generator', description: 'Generate Regular Expressions.', category: 'Development', icon: 'Terminal', promptTemplate: 'Write a Regular Expression (Regex) to match the following pattern, and explain how it works: {input}', inputPlaceholder: 'Pattern description...', inputLabel: 'Description' },
  { id: 'code-converter', name: 'Code Converter', description: 'Convert code between languages.', category: 'Development', icon: 'ArrowRightLeft', promptTemplate: 'Convert the following code to Python (or specify another language in the prompt): {input}', inputPlaceholder: 'Code...', inputLabel: 'Code' },

  // Career
  { id: 'resume-summary', name: 'Resume Summary', description: 'Write a professional resume summary.', category: 'Career', icon: 'FileText', promptTemplate: 'Write a professional resume summary for someone with this experience: {input}', inputPlaceholder: 'Experience...', inputLabel: 'Experience' },
  { id: 'cover-letter', name: 'Cover Letter', description: 'Write a tailored cover letter.', category: 'Career', icon: 'FileSignature', promptTemplate: 'Write a tailored cover letter for this job description and my background: {input}', inputPlaceholder: 'Job & Background...', inputLabel: 'Details' },
  { id: 'resignation-letter', name: 'Resignation Letter', description: 'Write a polite resignation letter.', category: 'Career', icon: 'LogOut', promptTemplate: 'Write a polite and professional resignation letter. Details: {input}', inputPlaceholder: 'Reason/Date...', inputLabel: 'Details' },
  { id: 'salary-negotiation', name: 'Salary Negotiation', description: 'Write a salary negotiation email.', category: 'Career', icon: 'DollarSign', promptTemplate: 'Write a professional email negotiating a higher salary based on this context: {input}', inputPlaceholder: 'Context...', inputLabel: 'Context' },
  { id: 'linkedin-summary', name: 'LinkedIn Summary', description: 'Write an engaging LinkedIn about section.', category: 'Career', icon: 'Linkedin', promptTemplate: 'Write an engaging LinkedIn "About" summary for this professional profile: {input}', inputPlaceholder: 'Profile details...', inputLabel: 'Details' },

  // Sales
  { id: 'cold-email', name: 'Cold Email Sequence', description: 'Generate a 3-part cold email sequence.', category: 'Sales', icon: 'Mail', promptTemplate: 'Write a 3-part cold email sequence (Initial, Follow-up 1, Follow-up 2) selling this product/service: {input}', inputPlaceholder: 'Product/Service details...', inputLabel: 'Product/Service' },
  { id: 'objection-handler', name: 'Objection Handler', description: 'Scripts to overcome sales objections.', category: 'Sales', icon: 'ShieldAlert', promptTemplate: 'Provide 3 persuasive scripts to overcome the following sales objection: {input}', inputPlaceholder: 'e.g., "It\'s too expensive" or "We already use a competitor"...', inputLabel: 'Sales Objection' },
  { id: 'sales-pitch', name: 'Sales Pitch Generator', description: 'Create a compelling elevator pitch.', category: 'Sales', icon: 'TrendingUp', promptTemplate: 'Create a compelling, 60-second elevator sales pitch for: {input}', inputPlaceholder: 'Product or company...', inputLabel: 'Product/Company' },
  { id: 'follow-up-email', name: 'Follow-up Email', description: 'Write a post-meeting follow-up email.', category: 'Sales', icon: 'Send', promptTemplate: 'Write a professional post-meeting follow-up email summarizing next steps based on these notes: {input}', inputPlaceholder: 'Meeting notes...', inputLabel: 'Meeting Notes' },

  // Finance
  { id: 'business-plan', name: 'Business Plan Outline', description: 'Generate a structured business plan.', category: 'Finance', icon: 'Briefcase', promptTemplate: 'Generate a comprehensive business plan outline (Executive Summary, Market Analysis, Financials, etc.) for: {input}', inputPlaceholder: 'Business idea...', inputLabel: 'Business Idea' },
  { id: 'investor-update', name: 'Investor Update Email', description: 'Draft a monthly investor update.', category: 'Finance', icon: 'LineChart', promptTemplate: 'Draft a professional monthly investor update email highlighting wins, challenges, and KPIs based on: {input}', inputPlaceholder: 'Monthly highlights...', inputLabel: 'Highlights' },
  { id: 'expense-reduction', name: 'Expense Reduction Ideas', description: 'Brainstorm ways to cut business costs.', category: 'Finance', icon: 'Scissors', promptTemplate: 'Brainstorm 10 actionable ways to reduce expenses and improve margins for a business in this industry: {input}', inputPlaceholder: 'Industry or business type...', inputLabel: 'Industry' },

  // Productivity
  { id: 'okr-generator', name: 'OKR Generator', description: 'Create Objectives and Key Results.', category: 'Productivity', icon: 'Target', promptTemplate: 'Generate 1 overarching Objective and 3 measurable Key Results (OKRs) for this goal: {input}', inputPlaceholder: 'Goal...', inputLabel: 'Goal' },
  { id: 'meeting-minutes', name: 'Meeting Minutes Summarizer', description: 'Turn rough notes into meeting minutes.', category: 'Productivity', icon: 'FileText', promptTemplate: 'Turn these rough meeting notes into structured meeting minutes with action items and owners: {input}', inputPlaceholder: 'Rough notes...', inputLabel: 'Notes' },
  { id: 'timeboxing', name: 'Timeboxing Schedule', description: 'Create a daily timeboxed schedule.', category: 'Productivity', icon: 'Clock', promptTemplate: 'Create a productive, timeboxed daily schedule based on this list of tasks and working hours: {input}', inputPlaceholder: 'Tasks and hours...', inputLabel: 'Tasks' },
  { id: 'eisenhower-matrix', name: 'Eisenhower Matrix', description: 'Categorize tasks by urgency and importance.', category: 'Productivity', icon: 'LayoutGrid', promptTemplate: 'Categorize the following tasks into the Eisenhower Matrix (Do, Decide, Delegate, Delete): {input}', inputPlaceholder: 'List of tasks...', inputLabel: 'Tasks' },

  // Legal
  { id: 'privacy-policy', name: 'Privacy Policy Outline', description: 'Draft a basic privacy policy outline.', category: 'Legal', icon: 'ShieldCheck', promptTemplate: 'Draft a basic privacy policy outline covering data collection, usage, and cookies for: {input}. Note: This is not legal advice.', inputPlaceholder: 'Website or app details...', inputLabel: 'App Details' },
  { id: 'nda-drafter', name: 'NDA Drafter', description: 'Create a standard Non-Disclosure Agreement.', category: 'Legal', icon: 'FileLock', promptTemplate: 'Draft a standard, mutual Non-Disclosure Agreement (NDA) template between two parties regarding: {input}. Note: This is not legal advice.', inputPlaceholder: 'Project or topic...', inputLabel: 'Topic' },
  { id: 'contract-explainer', name: 'Contract Clause Explainer', description: 'Translate legalese into plain English.', category: 'Legal', icon: 'Scale', promptTemplate: 'Translate the following legal contract clause into plain, easy-to-understand English: {input}', inputPlaceholder: 'Legal clause...', inputLabel: 'Clause' },

  // Podcasting
  { id: 'podcast-ideas', name: 'Podcast Episode Ideas', description: 'Brainstorm engaging podcast topics.', category: 'Podcasting', icon: 'Mic', promptTemplate: 'Brainstorm 10 engaging and unique podcast episode ideas for a podcast about: {input}', inputPlaceholder: 'Podcast theme...', inputLabel: 'Theme' },
  { id: 'podcast-questions', name: 'Interview Questions', description: 'Generate questions for podcast guests.', category: 'Podcasting', icon: 'HelpCircle', promptTemplate: 'Generate 10 deep, thought-provoking interview questions for a podcast guest who is an expert in: {input}', inputPlaceholder: 'Guest expertise...', inputLabel: 'Expertise' },
  { id: 'show-notes', name: 'Show Notes Generator', description: 'Write SEO-friendly podcast show notes.', category: 'Podcasting', icon: 'Headphones', promptTemplate: 'Write SEO-friendly podcast show notes including a summary, key takeaways, and timestamp placeholders for an episode about: {input}', inputPlaceholder: 'Episode topic...', inputLabel: 'Topic' },

  // Gaming
  { id: 'character-backstory', name: 'Character Backstory', description: 'Create a rich backstory for an RPG character.', category: 'Gaming', icon: 'User', promptTemplate: 'Create a rich, compelling backstory for a roleplaying game character with these traits: {input}', inputPlaceholder: 'Class, race, alignment, traits...', inputLabel: 'Character Traits' },
  { id: 'quest-generator', name: 'Quest Generator', description: 'Brainstorm side quests and main missions.', category: 'Gaming', icon: 'Map', promptTemplate: 'Brainstorm 5 unique, multi-step quests (including objectives and rewards) for a game set in: {input}', inputPlaceholder: 'Game setting or world...', inputLabel: 'Setting' },
  { id: 'lore-builder', name: 'Lore Builder', description: 'Generate worldbuilding lore and history.', category: 'Gaming', icon: 'BookOpen', promptTemplate: 'Generate detailed worldbuilding lore, including history, factions, and myths, for a fictional world based on this concept: {input}', inputPlaceholder: 'World concept...', inputLabel: 'Concept' },

  // Health & Fitness
  { id: 'workout-plan', name: 'Workout Plan Generator', description: 'Create a customized weekly workout routine.', category: 'Health & Fitness', icon: 'Activity', promptTemplate: 'Create a detailed, 7-day workout plan based on these goals and fitness level: {input}', inputPlaceholder: 'Goals, fitness level, available equipment...', inputLabel: 'Fitness Goals' },
  { id: 'meal-planner', name: 'Meal Planner', description: 'Generate a healthy weekly meal plan.', category: 'Health & Fitness', icon: 'Coffee', promptTemplate: 'Generate a healthy, balanced 7-day meal plan (breakfast, lunch, dinner, snacks) based on these dietary preferences: {input}', inputPlaceholder: 'Dietary restrictions, calorie goals...', inputLabel: 'Dietary Preferences' },
  { id: 'macro-calculator', name: 'Macro Guide', description: 'Get a macronutrient breakdown guide.', category: 'Health & Fitness', icon: 'PieChart', promptTemplate: 'Provide a detailed macronutrient breakdown and guide for someone with these stats and goals: {input}', inputPlaceholder: 'Age, weight, height, goal (e.g., lose fat, build muscle)...', inputLabel: 'Stats & Goals' },

  // Travel
  { id: 'travel-itinerary', name: 'Travel Itinerary', description: 'Plan a day-by-day travel itinerary.', category: 'Travel', icon: 'MapPin', promptTemplate: 'Create a detailed, realistic day-by-day travel itinerary for a trip to: {input}', inputPlaceholder: 'Destination, duration, interests...', inputLabel: 'Trip Details' },
  { id: 'packing-list', name: 'Packing List Generator', description: 'Generate a comprehensive packing list.', category: 'Travel', icon: 'Briefcase', promptTemplate: 'Generate a comprehensive, categorized packing list for a trip to: {input}', inputPlaceholder: 'Destination, weather, duration, activities...', inputLabel: 'Trip Details' },
  { id: 'local-guide', name: 'Local Hidden Gems', description: 'Discover off-the-beaten-path attractions.', category: 'Travel', icon: 'Compass', promptTemplate: 'List 10 hidden gems, local favorites, and off-the-beaten-path attractions in: {input}', inputPlaceholder: 'City or region...', inputLabel: 'Location' },

  // Event Planning
  { id: 'event-timeline', name: 'Event Timeline', description: 'Create a run-of-show timeline.', category: 'Event Planning', icon: 'Calendar', promptTemplate: 'Create a detailed run-of-show timeline for this event: {input}', inputPlaceholder: 'Event type, duration, key activities...', inputLabel: 'Event Details' },
  { id: 'wedding-vows', name: 'Wedding Vows Writer', description: 'Draft heartfelt wedding vows.', category: 'Event Planning', icon: 'Heart', promptTemplate: 'Write heartfelt, personalized wedding vows based on these details about our relationship: {input}', inputPlaceholder: 'Partner\'s name, inside jokes, tone...', inputLabel: 'Relationship Details' },
  { id: 'party-themes', name: 'Party Theme Ideas', description: 'Brainstorm creative party themes.', category: 'Event Planning', icon: 'Sparkles', promptTemplate: 'Brainstorm 10 highly creative and unique party themes for: {input}', inputPlaceholder: 'Occasion, age group, season...', inputLabel: 'Occasion Details' },

  // Design
  { id: 'color-palette', name: 'Color Palette Generator', description: 'Generate hex codes for a color scheme.', category: 'Design', icon: 'Palette', promptTemplate: 'Generate a cohesive 5-color palette (with HEX codes and usage explanations) for a brand described as: {input}', inputPlaceholder: 'Brand vibe, industry, keywords...', inputLabel: 'Brand Vibe' },
  { id: 'font-pairing', name: 'Font Pairing Suggestions', description: 'Get typography pairing recommendations.', category: 'Design', icon: 'Type', promptTemplate: 'Suggest 3 perfect Google Font pairings (Heading + Body) and explain why they work for a project described as: {input}', inputPlaceholder: 'Project type, mood...', inputLabel: 'Project Details' },
  { id: 'ui-copy', name: 'UI Microcopy Writer', description: 'Write crisp copy for buttons and alerts.', category: 'Design', icon: 'MousePointer', promptTemplate: 'Write crisp, user-friendly UI microcopy (buttons, success messages, error states) for this feature: {input}', inputPlaceholder: 'Feature description...', inputLabel: 'Feature' }
];
