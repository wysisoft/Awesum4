<script lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { globalLogger, type LogEntry } from '../globalLogger';

export default {
  setup() {
    const logs = ref<LogEntry[]>([]);

    // Update logs from global logger
    const updateLogs = () => {
      logs.value = globalLogger.getLogs();
    };

    // Clear logs
    const clearLogs = () => {
      globalLogger.clearLogs();
      logs.value = [];
    };

    // Get log level class
    const getLogLevelClass = (level: LogEntry['level']) => {
      return `log-${level}`;
    };

    // Scroll to bottom (only on initial load)
    const scrollToBottom = () => {
      const logContainer = document.getElementById('log-container');
      if (logContainer) {
        logContainer.scrollTop = logContainer.scrollHeight;
      }
    };

    // Set up periodic updates to get new logs from global logger
    let updateInterval: number | null = null;

    onMounted(() => {
      // Initial load of logs
      updateLogs();
      
      // Scroll to bottom on initial load
      setTimeout(scrollToBottom, 100);
      
      // Set up periodic updates to capture new logs
      updateInterval = window.setInterval(updateLogs, 100);
    });

    onUnmounted(() => {
      if (updateInterval) {
        clearInterval(updateInterval);
      }
    });

    return {
      logs,
      clearLogs,
      getLogLevelClass
    };
  }
};
</script>

<template>
  <div class="pageView" style="background-color: white;">
    <h1>{{ $t($resources.Console_Logs.key) }}</h1>
    
    <div class="log-controls" style="margin-bottom: 1rem; display: flex; gap: 1rem; align-items: center;">
      <button class="btn btn-primary" @click="clearLogs">
        {{ $t($resources.Clear_Logs.key) }}
      </button>
      
      <span style="color: #666;">
        {{ logs.length }} log entries
      </span>
    </div>

    <div 
      id="log-container" 
      class="log-container"
      style="
        height: 60vh; 
        overflow-y: auto; 
        border: 1px solid #ddd; 
        padding: 1rem; 
        background-color: #f8f9fa;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
        line-height: 1.4;
      "
    >
      <div 
        v-for="log in logs" 
        :key="log.id" 
        :class="['log-entry', getLogLevelClass(log.level)]"
        style="
          margin-bottom: 0.5rem; 
          padding: 0.5rem; 
          border-radius: 4px;
          border-left: 4px solid;
        "
      >
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
          <span class="log-timestamp" style="color: #666; font-size: 0.8rem;">
            {{ log.timestamp }}
          </span>
          <span class="log-level" style="font-weight: bold; text-transform: uppercase; font-size: 0.8rem;">
            {{ log.level }}
          </span>
        </div>
        <div class="log-message" style="white-space: pre-wrap; word-break: break-word;">
          {{ log.message }}
        </div>
        
        <!-- Source information -->
        <div v-if="log.source" class="log-source" style="margin-top: 0.25rem; font-size: 0.8rem; color: #888;">
          📍 {{ log.source.fileName }}:{{ log.source.lineNumber }}:{{ log.source.columnNumber }}
        </div>
        
        <!-- Stack trace -->
        <div v-if="log.stackTrace" class="log-stack" style="margin-top: 0.5rem;">
          <div style="font-size: 0.8rem; color: #666; margin-bottom: 0.25rem;">🔍 Stack trace:</div>
          <pre style="font-size: 0.75rem; background: #f8f9fa; padding: 0.5rem; border-radius: 3px; overflow-x: auto; white-space: pre-wrap; word-break: break-word; border-left: 3px solid #dee2e6;">{{ log.stackTrace }}</pre>
        </div>
        
        <!-- Additional arguments -->
        <div v-if="log.args.length > 0" class="log-args" style="margin-top: 0.5rem; color: #666;">
          <details>
            <summary style="cursor: pointer; font-size: 0.8rem;">📦 Additional arguments ({{ log.args.length }})</summary>
            <pre style="margin-top: 0.5rem; font-size: 0.8rem; background: #fff; padding: 0.5rem; border-radius: 3px; overflow-x: auto;">{{ JSON.stringify(log.args, null, 2) }}</pre>
          </details>
        </div>
      </div>
      
      <div v-if="logs.length === 0" style="text-align: center; color: #666; padding: 2rem;">
        No logs yet. Console output will appear here.
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.log-entry {
  &.log-log {
    border-left-color: #007bff;
    background-color: #f8f9ff;
  }
  
  &.log-info {
    border-left-color: #17a2b8;
    background-color: #f8f9fa;
  }
  
  &.log-warn {
    border-left-color: #ffc107;
    background-color: #fffbf0;
  }
  
  &.log-error {
    border-left-color: #dc3545;
    background-color: #fff5f5;
  }
  
  &.log-debug {
    border-left-color: #6c757d;
    background-color: #f8f9fa;
  }
}

.log-container::-webkit-scrollbar {
  width: 8px;
}

.log-container::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.log-container::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}

.log-container::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

.log-controls {
  flex-wrap: wrap;
}

.log-stack pre {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  line-height: 1.4;
  color: #333;
}

.log-source {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  background: #e9ecef;
  padding: 0.25rem 0.5rem;
  border-radius: 3px;
  display: inline-block;
}

.log-args pre {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .log-controls {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .log-container {
    height: 50vh;
  }
}
</style>
