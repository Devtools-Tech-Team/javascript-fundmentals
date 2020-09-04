const PubSub = {
    events: {},
    lastUid: 0,
    publish(event, data){
        if(!this.events[event]) return;
        const events = this.events[event];

        for (const s in events) {
            if (events.hasOwnProperty(s)) {
                const callback = events[s];

                callback(data);
            }
        }
    },
    subscribe(event, callback){
        this.events[event] = this.events[event] || {};
        const index = `uuid_${ String(++this.lastUid)}`;
        console.log(`subscribing at index ${index}`);
        this.events[event][index] = callback;


        unsubscribe = () => {
            console.log(`unsubscribing index ${index}`);
            delete this.events[event][index];
        }

        return unsubscribe;
    }
}

const unsubscribeClosure = PubSub.subscribe('closures', function(data){
    console.log(`I'm the first subscriber - ${data}`);
});

PubSub.publish('closures', 'Iam a closure');
unsubscribeClosure('closures');

/*
{
    'closures' : {
        uuid_0: function(data){
            console.log(`I'm the first subscriber - ${data}`);
        }
    }

}*/


