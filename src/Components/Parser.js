//const fs = require('fs')
//var RNFS = require('react-native-fs');

export default function parse(file) {
    const splitLines = t => {
        return t.split(/\r\n|\r|\n|\t/);
    }
    return;
    let messages_raw = [];
    let timestamps = [{}];

    // try {
    //     const data = fs.readFileSync(file, 'utf8');
    //     messages_raw = splitLines(data);
    //     console.log(typeof messages_raw);
    // } catch (err) {
    //     console.error(err);
    // }

    // RNFS.readFile(file, (err, data) => {
    //     if (err) throw err;
    //     console.log(data);
    //     messages_raw = splitLines(data);
    // });

    timestamps[0]["Lectures"] = 1;
    for (let i = 0; i < messages_raw.length - 1; i+=2) {
        let removed = (messages_raw.splice(i, 1)).toString();
        removed = removed.split(':');
        removed = (Number(removed[0]) * 3600) + (Number(removed[1]) * 60) +
            Number(removed[2]);
        removed = Math.ceil(removed / 5) * 5;

        if (timestamps[0].hasOwnProperty("Messages")) {
            let count = timestamps[0]["Time"].push(removed);
            console.log(timestamps[0]["Time"][count-2]);
            console.log("vs " + removed);
            if (timestamps[0]["Time"][count-2] !== removed) {
                timestamps[0]["Time_freq"].push(removed);
                timestamps[0]["Messages_freq"].push(1);
            }
            timestamps[0]["Messages"].push(messages_raw[i+1]);
            timestamps[0]["Messages_freq"][timestamps[0]["Time_freq"].indexOf(removed)]++;
        } else {
            timestamps[0]["Messages"] = [ messages_raw[i+1] ];
            timestamps[0]["Messages_freq"] = [ 1 ];
            timestamps[0]["Time"] = [ removed ];
            timestamps[0]["Time_freq"] = [ removed ];
        }
    }

    return JSON.stringify(timestamps, null, 2);
}
