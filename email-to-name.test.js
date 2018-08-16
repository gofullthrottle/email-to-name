const emailToName = require('./email-to-name.js');

const companyNames = ['acloudguru', 'acg'];

const data = [{
    input: 'TAIT.BROWN@GMAIL.COM',
    output: 'Tait Brown',
    title: 'Handle uppercase'
}, {
    input: 'tait.brown@gmail.com',
    output: 'Tait Brown',
    title: 'Handle happy path'
}, {
    input: 'tait_brown@gmail.com',
    output: 'Tait Brown',
    title: 'Handle underscores'
}, {
    input: 'tait.o\'connor@gmail.com',
    output: 'Tait O\'Connor',
    title: 'Handle O\'Connor case'
}, {
    input: 'tait...brown@gmail.com',
    output: 'Tait Brown',
    title: 'Handle excessive dots'
}, {
    input: 'tait.brown267@gmail.com',
    output: 'Tait Brown',
    title: 'Handle digits'
}, {
    input: 'tait.brown.267@gmail.com',
    output: 'Tait Brown',
    title: 'Handle digits preceded by dot'
}, {
    input: 'tait.brown.@gmail.com',
    output: 'Tait Brown',
    title: 'Handle trailing dot'
}, {
    input: 'tait.brown+test@gmail.com',
    output: 'Tait Brown',
    title: 'Handle gmail specific +test modifiers'
}, {
    input: 'acloudguru@taitbrown.com',
    output: 'Taitbrown',
    title: 'Handle company name @ personal domain'
}, {
    input: 'acg@taitbrown.com',
    output: 'Taitbrown',
    title: 'Handle array of company names'
}, {
    input: 'email@taitbrown.com',
    output: 'Taitbrown',
    title: 'Handle common identifier (email) at personal domain'
}, {
    input: 'hello@taitbrown.com',
    output: 'Taitbrown',
    title: 'Handle common identifier (hello) at personal domain'
}, {
    input: 'me@taitbrown.com',
    output: 'Taitbrown',
    title: 'Handle common identifier (me) at personal domain'
}, {
    input: 'john.mckim@gmail.com',
    output: 'John McKim',
    title: 'Handle "Mc" Case'
}, {
    input: 'john.amckim@gmail.com',
    output: 'John Amckim',
    title: 'Ignore mid sentence "mc" pattern'
}, {
    input: 'dr.tait.brown@gmail.com',
    output: 'Dr. Tait Brown',
    title: 'Handles Dr Prefix'
}, {
    input: 'prof.tait.brown@gmail.com',
    output: 'Prof. Tait Brown',
    title: 'Handles Prof Prefix'
}, {
    input: 'tait.brown.jnr@gmail.com',
    output: 'Tait Brown, Jnr.',
    title: 'Handles Junior Suffix'
}, {
    input: 'tait.brown.snr@gmail.com',
    output: 'Tait Brown, Snr.',
    title: 'Handles Senior Suffix'
}, {
    input: 'tait.brown.jr@gmail.com',
    output: 'Tait Brown, Jr.',
    title: 'Handles Junior Suffix'
}, {
    input: 'tait.brown.sr@gmail.com',
    output: 'Tait Brown, Sr.',
    title: 'Handles Senior Suffix'
}, {
    input: 'tait.brown.ii@gmail.com',
    output: 'Tait Brown II',
    title: 'Handles Name (The Second)'
}, {
    input: 'tait.ii.brown@gmail.com',
    output: 'Tait Ii Brown',
    title: 'Ignore midsentence (ii)'
}, {
    input: 'tait.brown.iii@gmail.com',
    output: 'Tait Brown III',
    title: 'Handles Name (The Third)'
}, {
    input: 'tait.iii.brown@gmail.com',
    output: 'Tait Iii Brown',
    title: 'Ignore midsentence (iii)'
}, {
    input: 'tait.brown.iv@gmail.com',
    output: 'Tait Brown IV',
    title: 'Handles Name (The Fourth)'
}, {
    input: 'tait.iv.brown@gmail.com',
    output: 'Tait Iv Brown',
    title: 'Ignore midsentence (iv)'
}, {
    input: 'mr.tait.brown@gmail.com',
    output: 'Mr. Tait Brown',
    title: 'Handle Title Period (Mr)'
}, {
    input: 'tait.mr.brown@gmail.com',
    output: 'Tait Mr Brown',
    title: 'Ignore midsentence title (Mr)'
}, {
    input: 'mrs.tait.brown@gmail.com',
    output: 'Mrs. Tait Brown',
    title: 'Handle Title Period (Mrs)'
}, {
    input: 'tait.mrs.brown@gmail.com',
    output: 'Tait Mrs Brown',
    title: 'Ignore midsentence title (Mrs)'
}, {
    input: 'ms.tait.brown@gmail.com',
    output: 'Ms. Tait Brown',
    title: 'Handle Title Period (Ms)'
}, {
    input: 'tait.ms.brown@gmail.com',
    output: 'Tait Ms Brown',
    title: 'Ignore midsentence title (Ms)'
}, {
    input: 'tait.brown@gmail.com',
    output: 'tait brown',
    params: {
        titleCase: false
    },
    title: 'Setting: Leave numbers in'
}, {
    input: 'dr.tait.brown@gmail.com',
    output: 'Dr Tait Brown',
    params: {
        appendPeriodToTitlePrefix: false
    },
    title: 'Setting: Don\'t apply a period after titles (Dr/Prof etc)'
}, {
    input: 'tait.mcbrown@gmail.com',
    output: 'Tait Mcbrown',
    params: {
        caseMc: false
    },
    title: 'Setting: Don\'t uppercase letter following "Mc"'
}, {
    input: 'tait.o\'connor@gmail.com',
    output: 'Tait O\'connor',
    params: {
        caseLetterApostrophe: false
    },
    title: 'Setting: Don\'t uppercase letter following "O\'"'
}, {
    input: 'tait.brown.iii@gmail.com',
    output: 'Tait Brown Iii',
    params: {
        uppercaseGenerationalNumbers: false
    },
    title: 'Setting: Don\'t uppercase generational number'
}, {
    input: 'tait.brown.jr@gmail.com',
    output: 'Tait Brown Jr',
    params: {
        commaPrependGenerationalPhrase: false
    },
    title: 'Setting: Don\'t comma prepend Jr/Snr generational titles'
}, {
    input: 'tait.brown123@gmail.com',
    output: 'Tait Brown123',
    params: {
        removeNumbers: false
    },
    title: 'Setting: Leave numbers in'
}, {
    input: 'tait.brown+test@gmail.com',
    output: 'Tait Brown+test',
    params: {
        removePlusWords: false
    },
    title: 'Setting: Leave plus words in'
}, {
    input: 'tait.brown+test123@gmail.com',
    output: 'Tait Brown+test',
    params: {
        removePlusWords: false
    },
    title: 'Setting: Leave plus words in (param) but remove numbers (default)'
}];

data.forEach((item) => {
    test(item.title, () => {
        expect(emailToName.process(item.input, companyNames, item.params)).toBe(item.output);    
    })
})
