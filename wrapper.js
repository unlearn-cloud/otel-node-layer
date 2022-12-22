console.log('In wrapper.js');
const { registerInstrumentations } = require('@opentelemetry/instrumentation');
const { PgInstrumentation } = require('@opentelemetry/instrumentation-pg');
console.log('Created the instrumentations');
// You must create the PgInstrumentation (and other instrumentations)
// before loading any corresponding modules, such as `require('pg')`.
registerInstrumentations({
  instrumentations: [
    new PgInstrumentation(),
  ],
});
console.log('registered successfully');