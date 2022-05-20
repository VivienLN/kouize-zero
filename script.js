/**
 * CONFIG
 */
const CONFIG = {
    // Name of your channel
    channel: '',
    // Command to use to answer a question (should include "!")
    command: '!answer',
};

/**
 * CODE
 */

class Kouize {
    static init() {
        if(CONFIG.command) {
            ComfyJS.onChat = (user, message, flags, self, extra) => {
                this.handleInput(user, message, flags, self, extra);
            }
        } else {
            ComfyJS.onCommand = (user, command, message, flags, extra) => {
                this.handleInput(user, message, flags, self, extra);
            }
        }
        ComfyJS.Init(CONFIG.channel);
        console.log('[Kouize] Ready to listen chat!');
    }

    static handleInput(user, message, flags, extra) {
        console.log('[Kouize] ' + user + ' said:' + message);
    }
    
}

Kouize.init();