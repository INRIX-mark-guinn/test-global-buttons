define(function(require) {
    'use strict';

    const ListChamber = require('common/platform/chamber/ListChamber');

    return class extends ListChamber {
        data() {
            return [
                {
                    icon: 'user',
                    text: ['John Brown', '206-555-1234'],
                },
                {
                    icon: 'magic',
                    text: ['Mr. Mistopheles', '206-666-5432']
                },
                {
                    icon: 'user',
                    text: ['Acadia Green', '111-222-3333']
                }
            ]
        }

        getChamberButtons() {
            return [{
                'oc-control' : 'CallButton',
                'action' : 'external',
            }];
        }

        onCall(data) {
            return {
                callerName: data.text[0],
                phoneNumber: data.text[1],
                callingApp: "sdk.user.test-globalbuttons",
                // image: data.images[0]
            };
        }
    }
});
