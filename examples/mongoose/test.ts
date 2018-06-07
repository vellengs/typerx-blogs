import { connect } from './connector';
import { ExampleService } from './example.service';
connect('mongodb://localhost/example');

const service = new ExampleService();
service.findOneByTitle('hello').then(res => console.log('title', res.title));