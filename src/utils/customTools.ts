import { Tool } from '../data/tools';

export const getCustomTools = (): Tool[] => {
  try {
    const toolsJson = localStorage.getItem('custom_tools');
    return toolsJson ? JSON.parse(toolsJson) : [];
  } catch (e) {
    return [];
  }
};

export const saveCustomTool = (tool: Tool) => {
  const tools = getCustomTools();
  tools.push(tool);
  localStorage.setItem('custom_tools', JSON.stringify(tools));
};

export const publishTool = async (tool: Tool) => {
  try {
    const response = await fetch('/api/tools', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tool),
    });
    return response.ok;
  } catch (e) {
    console.error('Failed to publish tool:', e);
    return false;
  }
};

export const getPublishedTools = async (): Promise<Tool[]> => {
  try {
    const response = await fetch('/api/tools');
    if (response.ok) {
      return await response.json();
    }
    return [];
  } catch (e) {
    return [];
  }
};
