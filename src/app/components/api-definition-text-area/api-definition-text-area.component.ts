import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {parseSpecification} from '../../state/specification.actions';
import SpecificationState from '../../state/specification.state';
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-api-definition-text-area',
  templateUrl: './api-definition-text-area.component.html',
  styleUrls: ['./api-definition-text-area.component.css']
})
export class ApiDefinitionTextAreaComponent implements OnInit, OnDestroy {

  constructor(private readonly store: Store<SpecificationState>) {
  }

  mock = "coapi: 1.0.0\n" +
    "servers:\n" +
    "  - url: iotdevices.com\n" +
    "    description: \"Production server of IOT devices\"\n" +
    "    port: 5356\n" +
    "info:\n" +
    "  title: \"Example IoT API\"\n" +
    "  description: \"Example for PDI2. API contains ... some IoT endpoints representing hardware.\"\n" +
    "  contact:\n" +
    "    name: \"Wojciech Jenczalik\"\n" +
    "    url: example.homepage.pl\n" +
    "    email: jenczalik@pw.edu.pl\n" +
    "  license:\n" +
    "    name: MIT License\n" +
    "    url: mit.edu/license.md\n" +
    "  version: 1.0-SNAPSHOT\n" +
    "  coapVersion: \"1\"\n" +
    "paths:\n" +
    "  - url: /lamps\n" +
    "    description: \"Lamps endpoint - allowing to get current state of lamps.\"\n" +
    "    get:\n" +
    "      produces:\n" +
    "        - 'application/json'\n" +
    "        - 'application/xml'\n" +
    "      description: \"Get state of all lamps.\"\n" +
    "  - url: /lamps/{lampId} \n" +
    "    description: \"Endpoint allowing to turn on/off given lamp or get its current state.\"\n" +
    "    get:\n" +
    "      produces:\n" +
    "        - 'application/json'\n" +
    "        - 'application/xml'\n" +
    "      parameters:\n" +
    "        - name: lampId\n" +
    "          in: path\n" +
    "          description: \"ID of a lamp\"\n" +
    "          required: true\n" +
    "          type: string\n" +
    "      description: \"Get state of given lamp.\"\n" +
    "      observable: true\n" +
    "      etag: true\n" +
    "    put:\n" +
    "      consumes:\n" +
    "        - 'application/json'\n" +
    "      produces:\n" +
    "        - 'application/json'\n" +
    "        - 'application/xml'\n" +
    "      parameters:\n" +
    "        - name: lampId\n" +
    "          in: path\n" +
    "          description: \"ID of a lamp\"\n" +
    "          required: true\n" +
    "          type: string\n" +
    "        - name: state\n" +
    "          in: body\n" +
    "          description: \"Desired state of a lamp\"\n" +
    "          type: integer\n" +
    "      description: Turns on/off the lamp.\n" +
    "      payload: \n" +
    "        description: Contains desired state of the lamp.\n" +
    "        content:\n" +
    "          - format: \"application/json\"\n" +
    "            schema: JSON Schema 2019-09\n" +
    "            examples:\n" +
    "              - description: Example of turning the lamp on by JSON request.\n" +
    "                value: \"{state: 1}\"\n" +
    "          - format: \"text/plain;\"\n" +
    "            examples:\n" +
    "              - description: Example of turning the lamp off by YAML request.\n" +
    "                value: \"state: 0\"\n" +
    "        required: true\n" +
    "      responses:\n" +
    "        - code: default\n" +
    "          description: A default response.\n" +
    "          content:\n" +
    "            - format: \"application/json\"\n" +
    "              schema: JSON Schema 2019-09\n" +
    "              examples:\n" +
    "                - value: \"{state: 1}\"\n" +
    "        - code: \"4.04\"\n" +
    "          description: Not found.\n" +
    "          content:\n" +
    "            - format: \"text/plain;\"\n" +
    "              schema: none\n" +
    "              examples:\n" +
    "                - value: \"Unable to find a lamp of given ID.\"\n" +
    "    delete:\n" +
    "      description: Removes given lamp from an API.";

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  submitSpec(yamlSpecification: any): void {
    this.store.dispatch(parseSpecification({specification: yamlSpecification}));
  }

  generateUuid(): string {
    return uuidv4();
  }
}

