// Frontend-only configuration
// This project is now pure React frontend with no backend dependencies

export const FRONTEND_CONFIG = {
  // Project mode - always frontend-only
  mode: 'frontend-only' as const,
  
  // Forms configuration
  forms: {
    // Use Formspree for form handling (or fallback to display contact info)
    provider: 'formspree' as const,
    contactFormId: import.meta.env.VITE_FORMSPREE_CONTACT_ID || null,
    quoteFormId: import.meta.env.VITE_FORMSPREE_QUOTE_ID || null,
    fallbackEmail: 'info@powertonengineering.in',
    fallbackPhone: '+91-XXXX-XXXX',
  },
  
  // Chatbot configuration
  chatbot: {
    // Use static keyword-based responses
    mode: 'static' as const,
    welcomeMessage: "Hello! Welcome to Powerton Engineering. I'm here to help you learn about our industrial automation solutions.",
    fallbackMessage: "For detailed assistance, please contact our team at +91-XXXX-XXXX or info@powertonengineering.in"
  },
  
  // Company information
  company: {
    name: 'Powerton Engineering Pvt. Ltd.',
    email: 'info@powertonengineering.in',
    phone: '+91-XXXX-XXXX',
    website: 'https://powertonengineering.in',
    logo: 'https://powertonengineering.in/assets/img/logo-new.jpg'
  }
};

// Helper function to check if forms can be submitted
export const canSubmitForms = () => {
  return !!(FRONTEND_CONFIG.forms.contactFormId && FRONTEND_CONFIG.forms.quoteFormId);
};

// Helper function to get form submission URL
export const getFormSubmissionUrl = (formType: 'contact' | 'quote') => {
  const formId = formType === 'contact' 
    ? FRONTEND_CONFIG.forms.contactFormId 
    : FRONTEND_CONFIG.forms.quoteFormId;
    
  return formId ? `https://formspree.io/f/${formId}` : null;
};