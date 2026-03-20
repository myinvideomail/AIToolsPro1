import { useState, useEffect } from 'react';
import { tools as staticTools, Tool } from '../data/tools';
import { getCustomTools, getPublishedTools } from '../utils/customTools';

export function useTools() {
  const [allTools, setAllTools] = useState<Tool[]>([...staticTools, ...getCustomTools()]);

  useEffect(() => {
    const fetchPublished = async () => {
      const published = await getPublishedTools();
      // Combine static, local custom, and published tools
      // Use a Map to avoid duplicates by ID
      const toolsMap = new Map<string, Tool>();
      
      staticTools.forEach(t => toolsMap.set(t.id, t));
      getCustomTools().forEach(t => toolsMap.set(t.id, t));
      published.forEach(t => toolsMap.set(t.id, { ...t, isCustom: true }));
      
      setAllTools(Array.from(toolsMap.values()));
    };

    fetchPublished();
  }, []);

  return allTools;
}
