import react from '@astrojs/react';
import vue from '@astrojs/vue';
import image from '@astrojs/image';

export default {
    // ...
    integrations: [react(), vue(), image({
        serviceEntryPoint: '@astrojs/image/sharp'
    })],
}
