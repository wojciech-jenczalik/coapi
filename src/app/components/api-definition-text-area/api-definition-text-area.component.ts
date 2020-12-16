import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import {errorOccured, noError, parseSpecification} from '../../state/specification.actions';
import SpecificationState from '../../state/specification.state';
import {v4 as uuidv4} from 'uuid';
import {CoapiValidationService} from '../../services/coapi-validation.service';
import {YamlParserService} from '../../services/yaml-parser.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-api-definition-text-area',
  templateUrl: './api-definition-text-area.component.html',
  styleUrls: ['./api-definition-text-area.component.css']
})
export class ApiDefinitionTextAreaComponent implements OnInit, OnDestroy {

  @ViewChild('errorContainer')
  errorContainer: ElementRef;

  redirectUuid = '';

  constructor(private readonly store: Store<SpecificationState>,
              private readonly validator: CoapiValidationService,
              private readonly yamlParser: YamlParserService,
              private readonly router: Router) {
  }

  ngOnInit() {
    this.generateUuid();
  }

  ngOnDestroy() {
  }

  submitSpec(yamlSpecification: any): void {
    if (this.validate(yamlSpecification, false)) {
      this.store.dispatch(parseSpecification({specification: yamlSpecification}));
    }
  }

  generateUuid(): void {
    this.redirectUuid = uuidv4();
  }

  validate(specification: string, redirect: boolean): boolean {
    try {
      const coapi = this.yamlParser.parseYamlSpec(specification);
      this.validator.validate(coapi);
      this.store.dispatch(noError());
      if (redirect) {
        this.router.navigate(['validation/valid/' + this.redirectUuid]);
      }
      return true;
    } catch (e) {
      this.store.dispatch(errorOccured({error: e}));
      this.router.navigate(['validation/error/' + this.redirectUuid]);
    }
  }

  mock = 'coapi: 1.0.0\n' +
    'servers:\n' +
    '  - url: iotdevices.com\n' +
    '    description: "Production server of IOT devices"\n' +
    '    port: 5356\n' +
    'info:\n' +
    '  title: "Example IoT API"\n' +
    '  description: "Example for PDI2. API contains ... some IoT endpoints representing hardware."\n' +
    '  contact:\n' +
    '    name: "Wojciech Jenczalik"\n' +
    '    url: example.homepage.pl\n' +
    '    email: jenczalik@pw.edu.pl\n' +
    '  license:\n' +
    '    name: MIT License\n' +
    '    url: mit.edu/license.md\n' +
    '  version: 1.0-SNAPSHOT\n' +
    '  coapVersion: "1"\n' +
    'paths:\n' +
    '  - url: /lamps\n' +
    '    description: "Lamps endpoint - allowing to get current state of lamps."\n' +
    '    get:\n' +
    '      produces:\n' +
    '        - \'application/json\'\n' +
    '        - \'application/xml\'\n' +
    '      description: "Get state of all lamps."\n' +
    '  - url: /lamps/{lampId} \n' +
    '    description: "Endpoint allowing to turn on/off given lamp or get its current state."\n' +
    '    get:\n' +
    '      produces:\n' +
    '        - \'application/json\'\n' +
    '        - \'application/xml\'\n' +
    '      parameters:\n' +
    '        - name: lampId\n' +
    '          in: path\n' +
    '          description: "ID of a lamp"\n' +
    '          required: true\n' +
    '          type: string\n' +
    '      description: "Get state of given lamp."\n' +
    '      observable: true\n' +
    '      etag: true\n' +
    '      responses:\n' +
    '        - code: default\n' +
    '          description: A default response.\n' +
    '          content:\n' +
    '            - format: "application/json"\n' +
    '              schema: JSON Schema 2019-09\n' +
    '              examples:\n' +
    '                - value: |\n' +
    '                    {\n' +
    '                     "state": 1\n' +
    '                    }\n' +
    '        - code: "4.04"\n' +
    '          description: Not found.\n' +
    '          content:\n' +
    '            - format: "text/plain;"\n' +
    '              schema: none\n' +
    '              examples:\n' +
    '                - value: "Unable to find a lamp of given ID."\n' +
    '    put:\n' +
    '      consumes:\n' +
    '        - \'application/json\'\n' +
    '      produces:\n' +
    '        - \'application/json\'\n' +
    '        - \'application/xml\'\n' +
    '      parameters:\n' +
    '        - name: lampId\n' +
    '          in: path\n' +
    '          description: "ID of a lamp"\n' +
    '          required: true\n' +
    '          type: string\n' +
    '        - name: state\n' +
    '          in: body\n' +
    '          description: "Desired state of a lamp"\n' +
    '          type: integer\n' +
    '      description: Turns on/off the lamp.\n' +
    '      payload: \n' +
    '        description: Contains desired state of the lamp.\n' +
    '        content:\n' +
    '          - format: "application/json"\n' +
    '            schema: JSON Schema 2019-09\n' +
    '            examples:\n' +
    '              - description: Example of turning the lamp on by JSON request.\n' +
    '                value: |\n' +
    '                  {\n' +
    '                   "state": 1\n' +
    '                  }\n' +
    '          - format: "text/plain;"\n' +
    '            examples:\n' +
    '              - description: Example of turning the lamp off by YAML request.\n' +
    '                value: "state: 0"\n' +
    '        required: true\n' +
    '      responses:\n' +
    '        - code: default\n' +
    '          description: A default response.\n' +
    '          content:\n' +
    '            - format: "application/xml"\n' +
    '              schema: JSON Schema 2019-09\n' +
    '              examples:\n' +
    '                - value: |\n' +
    '                    <xml>\n' +
    '                     <state> 1 </state>\n' +
    '                    </xml>\n' +
    '        - code: "4.04"\n' +
    '          description: Not found.\n' +
    '          content:\n' +
    '            - format: "text/plain;"\n' +
    '              schema: none\n' +
    '              examples:\n' +
    '                - value: "Unable to find a lamp of given ID."\n' +
    '    delete:\n' +
    '      description: Removes given lamp from an API.';
}

