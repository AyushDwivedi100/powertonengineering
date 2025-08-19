// Deployment Configuration System
// Automatically detects deployment environment and configures accordingly

export type DeploymentMode = 'development' | 'static' | 'fullstack' | 'serverless';

interface DeploymentConfig {
  mode: DeploymentMode;
  apiEndpoint: string;
  formHandler: 'backend' | 'formspree' | 'netlify' | 'mailto';
  chatbotMode: 'backend' | 'static' | 'ai';
  storageType: 'memory' | 'database' | 'local';
}

// Environment detection - Frontend-only project
const detectDeploymentMode = (): DeploymentMode => {
  // Always use static mode for frontend-only React project
  // No backend server or database needed
  return 'static';
};

// Configuration based on deployment mode
export const getDeploymentConfig = (): DeploymentConfig => {
  const mode = detectDeploymentMode();
  
  const configs: Record<DeploymentMode, DeploymentConfig> = {
    development: {
      mode: 'development',
      apiEndpoint: 'http://localhost:5000/api',
      formHandler: 'backend',
      chatbotMode: 'backend',
      storageType: 'memory'
    },
    fullstack: {
      mode: 'fullstack',
      apiEndpoint: '/api',
      formHandler: 'backend',
      chatbotMode: 'backend',
      storageType: 'database'
    },
    serverless: {
      mode: 'serverless',
      apiEndpoint: '/api',
      formHandler: 'backend',
      chatbotMode: 'static',
      storageType: 'database'
    },
    static: {
      mode: 'static',
      apiEndpoint: '',
      formHandler: 'formspree',
      chatbotMode: 'static',
      storageType: 'local'
    }
  };
  
  return configs[mode];
};

// Form submission configuration
export const getFormConfig = () => {
  const config = getDeploymentConfig();
  
  return {
    contactFormEndpoint: config.formHandler === 'formspree' 
      ? import.meta.env.VITE_FORMSPREE_CONTACT_ID 
        ? `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_CONTACT_ID}`
        : 'https://formspree.io/f/YOUR_CONTACT_FORM_ID'
      : `${config.apiEndpoint}/contacts`,
    
    quoteFormEndpoint: config.formHandler === 'formspree'
      ? import.meta.env.VITE_FORMSPREE_QUOTE_ID
        ? `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_QUOTE_ID}`
        : 'https://formspree.io/f/YOUR_QUOTE_FORM_ID'
      : `${config.apiEndpoint}/quote-requests`,
    
    method: config.formHandler === 'formspree' ? 'POST' : 'POST',
    headers: config.formHandler === 'formspree' 
      ? { 'Content-Type': 'application/json' }
      : { 'Content-Type': 'application/json' }
  };
};

// Chatbot configuration
export const getChatbotConfig = () => {
  const config = getDeploymentConfig();
  
  return {
    mode: config.chatbotMode,
    endpoint: config.chatbotMode === 'backend' ? `${config.apiEndpoint}/chatbot` : null,
    staticResponses: config.chatbotMode === 'static'
  };
};

// Export current configuration for debugging
export const getCurrentConfig = () => {
  const config = getDeploymentConfig();
  console.log('🚀 Deployment Configuration:', config);
  return config;
};