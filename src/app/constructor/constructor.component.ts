
import { Component, ElementRef, ViewChild,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-constructor',
  templateUrl: './constructor.component.html',
  styleUrls: ['./constructor.component.scss']
})
export class ConstructorComponent implements OnInit {

public formSrc;
public remp;
public jsonResult;
public datarResult;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  @ViewChild('json') jsonElement?: ElementRef;
  public jsonFile = {
    "components": [
        {
            "label": "Table",
            "cellAlignment": "left",
            "key": "table",
            "tags": [
                "table"
            ],
            "type": "table",
            "numRows": 1,
            "input": false,
            "tableView": false,
            "rows": [
                [
                    {
                        "components": [
                            {
                                "label": "Checkbox",
                                "description": "Description",
                                "tooltip": "Tooltip",
                                "shortcut": "A",
                                "customClass": "Custom CSS ",
                                "tableView": false,
                                "redrawOn": "number",
                                "validate": {
                                    "required": true,
                                    "customMessage": "Custom Error Message"
                                },
                                "errorLabel": "Error Label",
                                "key": "checkbox3",
                                "tags": [
                                    "checkbox"
                                ],
                                "type": "checkbox",
                                "input": true,
                                "defaultValue": true
                            }
                        ]
                    },
                    {
                        "components": [
                            {
                                "label": "select an account",
                                "labelPosition": "left-left",
                                "widget": "html5",
                                "placeholder": "Please enter account",
                                "description": "Description of the label",
                                "tooltip": "Tooltip of the label",
                                "customClass": "Account_input",
                                "tabindex": "1",
                                "tableView": true,
                                "data": {
                                    "values": [
                                        {
                                            "label": "Label1",
                                            "value": "label1"
                                        },
                                        {
                                            "label": "Label2",
                                            "value": "label2"
                                        }
                                    ]
                                },
                                "dataType": "string",
                                "idPath": "id_select",
                                "refreshOn": "select",
                                "selectThreshold": 0.3,
                                "validate": {
                                    "required": true,
                                    "customMessage": "Ne vibrano"
                                },
                                "errorLabel": "Select account",
                                "key": "selectAnAccount1",
                                "attributes": {
                                    "Layout Att": "Att value"
                                },
                                "type": "select",
                                "indexeddb": {
                                    "filter": {}
                                },
                                "labelWidth": 20,
                                "labelMargin": 5,
                                "input": true
                            }
                        ]
                    }
                   
                ]
            ]
        },
        {
            "label": "Text Area",
            "labelPosition": "right-left",
            "placeholder": "Text Aria",
            "description": "Description",
            "tooltip": "Tooltip",
            "editor": "ace",
            "autoExpand": false,
            "customClass": "Custom CSS Class",
            "tabindex": "1",
            "tableView": true,
            "persistent": "client-only",
            "case": "lowercase",
            "redrawOn": "data",
            "validate": {
                "required": true,
                "customMessage": "Custom Error Message",
                "minLength": 1,
                "maxLength": 200
            },
            "errorLabel": "Error Label",
            "key": "textArea1",
            "tags": [
                "textArea"
            ],
            "type": "textarea",
            "labelWidth": 10,
            "labelMargin": 5,
            "rows": 1,
            "as": "string",
            "input": true
        },
        {
            "tooltip": "Tooltip",
            "customClass": "Custom CSS Class",
            "collapsible": false,
            "key": "panel",
            "tags": [
                "panel"
            ],
            "type": "panel",
            "label": "Panel",
            "input": false,
            "tableView": false,
            "components": [
                {
                    "label": "Select Boxes",
                    "labelPosition": "left-right",
                    "optionsLabelPosition": "left",
                    "description": "Description",
                    "tooltip": "Tooltip",
                    "customClass": "Custom CSS Class",
                    "inline": true,
                    "tableView": false,
                    "defaultValue": {
                        "": false
                    },
                    "values": [
                        {
                            "label": "Label1",
                            "value": "Value1",
                            "shortcut": "C"
                        },
                        {
                            "label": "Label2",
                            "value": "label2",
                            "shortcut": ""
                        },
                        {
                            "label": "Label3",
                            "value": "label3",
                            "shortcut": ""
                        }
                    ],
                    "redrawOn": "checkbox",
                    "validate": {
                        "required": true,
                        "customMessage": "Custom Error Message",
                        "minSelectedCount": 1,
                        "maxSelectedCount": 3
                    },
                    "errorLabel": "Error Label",
                    "key": "selectBoxes1",
                    "tags": [
                        "selectBoxes"
                    ],
                    "type": "selectboxes",
                    "input": true,
                    "inputType": "checkbox",
                    "labelWidth": 10,
                    "labelMargin": 12
                }
            ]
        },
        {
            "label": "Text Field",
            "labelPosition": "right-left",
            "description": "Description",
            "tooltip": "Tooltip",
            "prefix": "mr",
            "customClass": "InputText_class",
            "autocomplete": "on",
            "autofocus": true,
            "tableView": true,
            "protected": true,
            "case": "uppercase",
            "redrawOn": "selectAnAccount",
            "validateOn": "blur",
            "validate": {
                "required": true,
                "customMessage": "Custom Error Message",
                "minLength": 2,
                "maxLength": 50
            },
            "errorLabel": "Error Label",
            "key": "textField",
            "tags": [
                "Field Tag"
            ],
            "attributes": {
                "keyLyout": "value"
            },
            "type": "textfield",
            "input": true,
            "labelWidth": 10,
            "labelMargin": 2
        },
        {
            "label": "Number",
            "labelPosition": "bottom",
            "placeholder": "Submit",
            "description": "Description",
            "tooltip": "Tooltip",
            "prefix": "the",
            "customClass": "special",
            "hideLabel": true,
            "mask": false,
            "spellcheck": false,
            "tableView": false,
            "delimiter": false,
            "requireDecimal": false,
            "inputFormat": "html",
            "protected": true,
            "redrawOn": "textField",
            "validate": {
                "required": true,
                "customMessage": "Custom Error Message",
                "min": 1,
                "max": 12
            },
            "errorLabel": "Error Label",
            "key": "number",
            "tags": [
                "number"
            ],
            "attributes": {
                "key": "Value"
            },
            "type": "number",
            "input": true,
            "decimalLimit": 2
        },
        {
            "label": "Password",
            "labelPosition": "left-right",
            "placeholder": "password",
            "description": "Description",
            "tooltip": "Tooltip",
            "suffix": "'s",
            "customClass": "Custom CSS ",
            "tableView": false,
            "case": "mixed",
            "redrawOn": "textField",
            "validateOn": "blur",
            "validate": {
                "customMessage": "Custom Error Message",
                "minLength": 1,
                "maxLength": 123
            },
            "errorLabel": "Error Label",
            "key": "password",
            "tags": [
                "password"
            ],
            "type": "password",
            "input": true,
            "protected": true
        },
        {
            "label": "Checkbox",
            "description": "Description",
            "tooltip": "Tooltip",
            "shortcut": "A",
            "customClass": "Custom CSS ",
            "tableView": false,
            "redrawOn": "number",
            "validate": {
                "required": true,
                "customMessage": "Custom Error Message"
            },
            "errorLabel": "Error Label",
            "key": "checkbox",
            "tags": [
                "checkbox"
            ],
            "type": "checkbox",
            "input": true,
            "defaultValue": true
        },
        {
            "label": "Checkbox",
            "description": "Description",
            "tooltip": "Tooltip",
            "shortcut": "A",
            "customClass": "Custom CSS ",
            "tableView": false,
            "redrawOn": "number",
            "validate": {
                "required": true,
                "customMessage": "Custom Error Message"
            },
            "errorLabel": "Error Label",
            "key": "checkbox2",
            "tags": [
                "checkbox"
            ],
            "type": "checkbox",
            "input": true,
            "defaultValue": true
        },
        {
            "label": "Checkbox",
            "description": "Description",
            "tooltip": "Tooltip",
            "shortcut": "A",
            "customClass": "Custom CSS ",
            "tableView": false,
            "redrawOn": "number",
            "validate": {
                "required": true,
                "customMessage": "Custom Error Message"
            },
            "errorLabel": "Error Label",
            "key": "checkbox1",
            "tags": [
                "checkbox"
            ],
            "type": "checkbox",
            "input": true,
            "defaultValue": true
        },
        {
            "label": "Radio",
            "description": "Description",
            "tooltip": "Tooltip",
            "shortcut": "B",
            "inputType": "radio",
            "customClass": "Custom CSS",
            "tableView": false,
            "redrawOn": "number",
            "validate": {
                "required": true,
                "customMessage": "Custom Error Message"
            },
            "errorLabel": "Error Label",
            "key": "radio",
            "tags": [
                "radio"
            ],
            "type": "checkbox",
            "name": "Radio Key",
            "value": "Radio Value",
            "input": true,
            "defaultValue": false,
            "labelWidth": 1,
            "labelMargin": 3,
            "Radio Key": "Radio Value"
        },
        {
            "label": "Select Boxes",
            "labelPosition": "left-right",
            "optionsLabelPosition": "left",
            "description": "Description",
            "tooltip": "Tooltip",
            "customClass": "Custom CSS Class",
            "inline": true,
            "tableView": false,
            "defaultValue": {
                "": false
            },
            "values": [
                {
                    "label": "Label1",
                    "value": "Value1",
                    "shortcut": "C"
                },
                {
                    "label": "Label2",
                    "value": "label2",
                    "shortcut": ""
                },
                {
                    "label": "Label3",
                    "value": "label3",
                    "shortcut": ""
                }
            ],
            "redrawOn": "checkbox",
            "validate": {
                "required": true,
                "customMessage": "Custom Error Message",
                "minSelectedCount": 1,
                "maxSelectedCount": 3
            },
            "errorLabel": "Error Label",
            "key": "selectBoxes",
            "tags": [
                "selectBoxes"
            ],
            "type": "selectboxes",
            "input": true,
            "inputType": "checkbox",
            "labelWidth": 10,
            "labelMargin": 12
        },
        {
            "label": "select an account",
            "labelPosition": "left-left",
            "widget": "html5",
            "placeholder": "Please enter account",
            "description": "Description of the label",
            "tooltip": "Tooltip of the label",
            "customClass": "Account_input",
            "tabindex": "1",
            "tableView": true,
            "data": {
                "values": [
                    {
                        "label": "Label1",
                        "value": "label1"
                    },
                    {
                        "label": "Label2",
                        "value": "label2"
                    }
                ]
            },
            "dataType": "string",
            "idPath": "id_select",
            "refreshOn": "select",
            "selectThreshold": 0.3,
            "validate": {
                "required": true,
                "customMessage": "Ne vibrano"
            },
            "errorLabel": "Select account",
            "key": "selectAnAccount",
            "attributes": {
                "Layout Att": "Att value"
            },
            "type": "select",
            "indexeddb": {
                "filter": {}
            },
            "labelWidth": 20,
            "labelMargin": 5,
            "input": true
        },
        {
            "label": "Submit",
            "showValidations": false,
            "tableView": false,
            "key": "submit",
            "type": "button",
            "input": true
        },
        {
            "label": "Url",
            "labelPosition": "left-right",
            "placeholder": "Placeholder",
            "description": "Description",
            "tooltip": "Tooltip",
            "prefix": "a",
            "suffix": "b",
            "customClass": "Custom CSS Class",
            "autocomplete": "on",
            "tableView": true,
            "defaultValue": "www.point.md",
            "protected": true,
            "dbIndex": true,
            "encrypted": true,
            "redrawOn": "password",
            "validate": {
                "required": true,
                "customMessage": "Custom Error Message",
                "minLength": 2,
                "maxLength": 13
            },
            "errorLabel": "Error Label",
            "key": "url",
            "tags": [
                "url"
            ],
            "attributes": {
                "radio": "1"
            },
            "type": "url",
            "input": true,
            "labelWidth": 2,
            "labelMargin": 5
        },
        {
            "label": "Phone Number",
            "placeholder": "Placeholder",
            "description": "Description\r\n",
            "tooltip": "Tooltip",
            "prefix": "a",
            "suffix": "b",
            "customClass": "Custom CSS Class",
            "autocomplete": "on",
            "tableView": true,
            "multiple": true,
            "defaultValue": [
                "Муждугородний",
                "Местный"
            ],
            "case": "mixed",
            "redrawOn": "checkbox",
            "validate": {
                "required": true,
                "customMessage": "Custom Error Message",
                "multiple": true
            },
            "errorLabel": "Error Label",
            "key": "phoneNumber",
            "tags": [
                "phoneNumber"
            ],
            "type": "phoneNumber",
            "input": true
        },
        {
            "collapsible": false,
            "key": "panel1",
            "type": "panel",
            "label": "Panel",
            "input": false,
            "tableView": false,
            "components": [
                {
                    "label": "Text Field",
                    "description": "Description",
                    "tooltip": "Tooltip",
                    "tableView": true,
                    "validate": {
                        "minLength": 1,
                        "maxLength": 123
                    },
                    "key": "textField1",
                    "type": "textfield",
                    "input": true
                }
            ]
        },
        {
            "tooltip": "Tooltip",
            "key": "fieldset",
            "type": "fieldset",
            "label": "",
            "input": false,
            "tableView": false,
            "components": [
                {
                    "legend": "Legend2",
                    "key": "fieldset1",
                    "type": "fieldset",
                    "label": "",
                    "input": false,
                    "tableView": false,
                    "components": [
                        {
                            "label": "Text Field",
                            "placeholder": "qwerty",
                            "description": "Description",
                            "tooltip": "Tooltip",
                            "tableView": true,
                            "validate": {
                                "minLength": 12,
                                "maxLength": 123
                            },
                            "key": "textField2",
                            "type": "textfield",
                            "input": true
                        }
                    ]
                }
            ]
        },
        {
            "label": "Tags",
            "placeholder": "Placeholder",
            "description": "Description",
            "tooltip": "Tooltip",
            "customClass": "Custom CSS Class",
            "autofocus": true,
            "tableView": false,
            "defaultValue": "horse",
            "delimeter": "1",
            "maxTags": 1,
            "storeas": "array",
            "redrawOn": "number",
            "validate": {
                "required": true,
                "customMessage": "Custom Error Message"
            },
            "errorLabel": "Error Label",
            "key": "tags",
            "tags": [
                "tags"
            ],
            "type": "tags",
            "input": true
        }
    ]
}
public oldJson = {
  "components": [
      {
          "label": "Table",
          "cellAlignment": "left",
          "key": "table",
          "tags": [
              "table"
          ],
          "type": "table",
          "numRows": 1,
          "input": false,
          "tableView": false,
          "rows": [
              [
                  {
                      "components": [
                          {
                              "label": "Checkbox",
                              "description": "Description",
                              "tooltip": "Tooltip",
                              "shortcut": "A",
                              "customClass": "Custom CSS ",
                              "tableView": false,
                              "redrawOn": "number",
                              "validate": {
                                  "required": true,
                                  "customMessage": "Custom Error Message"
                              },
                              "errorLabel": "Error Label",
                              "key": "checkbox3",
                              "tags": [
                                  "checkbox"
                              ],
                              "type": "checkbox",
                              "input": true,
                              "defaultValue": true
                          }
                      ]
                  },
                  {
                      "components": [
                          {
                              "label": "select an account",
                              "labelPosition": "left-left",
                              "widget": "html5",
                              "placeholder": "Please enter account",
                              "description": "Description of the label",
                              "tooltip": "Tooltip of the label",
                              "customClass": "Account_input",
                              "tabindex": "1",
                              "tableView": true,
                              "data": {
                                  "values": [
                                      {
                                          "label": "Label1",
                                          "value": "label1"
                                      },
                                      {
                                          "label": "Label2",
                                          "value": "label2"
                                      }
                                  ]
                              },
                              "dataType": "string",
                              "idPath": "id_select",
                              "refreshOn": "select",
                              "selectThreshold": 0.3,
                              "validate": {
                                  "required": true,
                                  "customMessage": "Ne vibrano"
                              },
                              "errorLabel": "Select account",
                              "key": "selectAnAccount1",
                              "attributes": {
                                  "Layout Att": "Att value"
                              },
                              "type": "select",
                              "indexeddb": {
                                  "filter": {}
                              },
                              "labelWidth": 20,
                              "labelMargin": 5,
                              "input": true
                          }
                      ]
                  },
                  {
                      "components": [
                          {
                              "label": "Text Area",
                              "labelPosition": "right-left",
                              "placeholder": "Text Aria",
                              "description": "Description",
                              "tooltip": "Tooltip",
                              "editor": "ace",
                              "autoExpand": false,
                              "customClass": "Custom CSS Class",
                              "tabindex": "1",
                              "tableView": true,
                              "persistent": "client-only",
                              "case": "lowercase",
                              "redrawOn": "data",
                              "validate": {
                                  "required": true,
                                  "customMessage": "Custom Error Message",
                                  "minLength": 1,
                                  "maxLength": 200
                              },
                              "errorLabel": "Error Label",
                              "key": "textArea1",
                              "tags": [
                                  "textArea"
                              ],
                              "type": "textarea",
                              "labelWidth": 10,
                              "labelMargin": 5,
                              "rows": 1,
                              "as": "string",
                              "input": true
                          }
                      ]
                  }
              ]
          ]
      },
      {
          "tooltip": "Tooltip",
          "customClass": "Custom CSS Class",
          "collapsible": false,
          "key": "panel",
          "tags": [
              "panel"
          ],
          "type": "panel",
          "label": "Panel",
          "input": false,
          "tableView": false,
          "components": [
              {
                  "label": "Select Boxes",
                  "labelPosition": "left-right",
                  "optionsLabelPosition": "left",
                  "description": "Description",
                  "tooltip": "Tooltip",
                  "customClass": "Custom CSS Class",
                  "inline": true,
                  "tableView": false,
                  "defaultValue": {
                      "": false
                  },
                  "values": [
                      {
                          "label": "Label1",
                          "value": "Value1",
                          "shortcut": "C"
                      },
                      {
                          "label": "Label2",
                          "value": "label2",
                          "shortcut": ""
                      },
                      {
                          "label": "Label3",
                          "value": "label3",
                          "shortcut": ""
                      }
                  ],
                  "redrawOn": "checkbox",
                  "validate": {
                      "required": true,
                      "customMessage": "Custom Error Message",
                      "minSelectedCount": 1,
                      "maxSelectedCount": 3
                  },
                  "errorLabel": "Error Label",
                  "key": "selectBoxes1",
                  "tags": [
                      "selectBoxes"
                  ],
                  "type": "selectboxes",
                  "input": true,
                  "inputType": "checkbox",
                  "labelWidth": 10,
                  "labelMargin": 12
              }
          ]
      },
      {
          "label": "Tree",
          "description": "Description",
          "tooltip": "Tooltip",
          "customClass": "Custom CSS Class",
          "tableView": true,
          "redrawOn": "number",
          "validate": {
              "required": true,
              "customMessage": "Custom Error Message"
          },
          "errorLabel": "Error Label",
          "key": "tree",
          "tags": [
              "tree"
          ],
          "type": "tree",
          "input": true,
          "tree": true,
          "components": [
              {
                  "label": "Text Area",
                  "labelPosition": "right-left",
                  "placeholder": "Text Aria",
                  "description": "Description",
                  "tooltip": "Tooltip",
                  "editor": "ace",
                  "autoExpand": false,
                  "customClass": "Custom CSS Class",
                  "tabindex": "1",
                  "tableView": true,
                  "persistent": "client-only",
                  "case": "lowercase",
                  "redrawOn": "data",
                  "validate": {
                      "required": true,
                      "customMessage": "Custom Error Message",
                      "minLength": 1,
                      "maxLength": 200
                  },
                  "errorLabel": "Error Label",
                  "key": "textArea",
                  "tags": [
                      "textArea"
                  ],
                  "type": "textarea",
                  "labelWidth": 10,
                  "labelMargin": 5,
                  "rows": 5,
                  "as": "string",
                  "input": true
              }
          ]
      },
      {
          "label": "Data Grid",
          "description": "Description",
          "tooltip": "Tooltip",
          "reorder": true,
          "addAnother": "Add Another Texta",
          "addAnotherPosition": "bottom",
          "defaultOpen": true,
          "layoutFixed": false,
          "enableRowGroups": false,
          "initEmpty": false,
          "customClass": "Custom CSS Class",
          "tableView": true,
          "defaultValue": [
              {
                  "upload": []
              }
          ],
          "redrawOn": "password",
          "validate": {
              "required": true,
              "minLength": "1",
              "maxLength": "12",
              "customMessage": "Custom Error Message"
          },
          "errorLabel": "Error Label",
          "key": "dataGrid",
          "tags": [
              "dataGrid"
          ],
          "type": "datagrid",
          "input": true,
          "components": [
              {
                  "label": "Upload",
                  "description": "Description",
                  "tooltip": "Tooltip",
                  "customClass": "Custom CSS ",
                  "tableView": false,
                  "storage": "base64",
                  "dir": "C://",
                  "webcam": false,
                  "fileTypes": [
                      {
                          "label": "JPG",
                          "value": "JPG"
                      }
                  ],
                  "validate": {
                      "customMessage": "Custom Error Message"
                  },
                  "errorLabel": "Error Label",
                  "key": "upload",
                  "type": "file",
                  "input": true
              },
              {
                  "label": "Text Field",
                  "labelPosition": "right-left",
                  "description": "Description",
                  "tooltip": "Tooltip",
                  "prefix": "mr",
                  "customClass": "InputText_class",
                  "autocomplete": "on",
                  "autofocus": true,
                  "tableView": true,
                  "protected": true,
                  "case": "uppercase",
                  "redrawOn": "selectAnAccount",
                  "validateOn": "blur",
                  "validate": {
                      "required": true,
                      "customMessage": "Custom Error Message",
                      "minLength": 2,
                      "maxLength": 50
                  },
                  "errorLabel": "Error Label",
                  "key": "textField",
                  "tags": [
                      "Field Tag"
                  ],
                  "attributes": {
                      "keyLyout": "value"
                  },
                  "type": "textfield",
                  "input": true,
                  "labelWidth": 10,
                  "labelMargin": 2
              }
          ]
      },
      {
          "label": "Data Map",
          "description": "Description",
          "tooltip": "Tooltip",
          "keyLabel": "firstColumn",
          "customClass": "Custom CSS Class",
          "hideLabel": true,
          "tableView": false,
          "redrawOn": "data",
          "validate": {
              "required": true,
              "customMessage": "Custom Error Message"
          },
          "errorLabel": "Error Label",
          "key": "dataMap",
          "tags": [
              "dataMap"
          ],
          "type": "datamap",
          "input": true,
          "valueComponent": {
              "type": "textfield",
              "key": "key",
              "label": "Value",
              "input": true,
              "hideLabel": true,
              "tableView": true
          }
      },
      {
          "label": "Number",
          "labelPosition": "bottom",
          "placeholder": "Submit",
          "description": "Description",
          "tooltip": "Tooltip",
          "prefix": "the",
          "customClass": "special",
          "hideLabel": true,
          "mask": false,
          "spellcheck": false,
          "tableView": false,
          "delimiter": false,
          "requireDecimal": false,
          "inputFormat": "html",
          "protected": true,
          "redrawOn": "textField",
          "validate": {
              "required": true,
              "customMessage": "Custom Error Message",
              "min": 1,
              "max": 12
          },
          "errorLabel": "Error Label",
          "key": "number",
          "tags": [
              "number"
          ],
          "attributes": {
              "key": "Value"
          },
          "type": "number",
          "input": true,
          "decimalLimit": 2
      },
      {
          "label": "Password",
          "labelPosition": "left-right",
          "placeholder": "password",
          "description": "Description",
          "tooltip": "Tooltip",
          "suffix": "'s",
          "customClass": "Custom CSS ",
          "tableView": false,
          "case": "mixed",
          "redrawOn": "textField",
          "validateOn": "blur",
          "validate": {
              "customMessage": "Custom Error Message",
              "minLength": 1,
              "maxLength": 123
          },
          "errorLabel": "Error Label",
          "key": "password",
          "tags": [
              "password"
          ],
          "type": "password",
          "input": true,
          "protected": true
      },
      {
          "label": "Checkbox",
          "description": "Description",
          "tooltip": "Tooltip",
          "shortcut": "A",
          "customClass": "Custom CSS ",
          "tableView": false,
          "redrawOn": "number",
          "validate": {
              "required": true,
              "customMessage": "Custom Error Message"
          },
          "errorLabel": "Error Label",
          "key": "checkbox",
          "tags": [
              "checkbox"
          ],
          "type": "checkbox",
          "input": true,
          "defaultValue": true
      },
      {
          "label": "Checkbox",
          "description": "Description",
          "tooltip": "Tooltip",
          "shortcut": "A",
          "customClass": "Custom CSS ",
          "tableView": false,
          "redrawOn": "number",
          "validate": {
              "required": true,
              "customMessage": "Custom Error Message"
          },
          "errorLabel": "Error Label",
          "key": "checkbox2",
          "tags": [
              "checkbox"
          ],
          "type": "checkbox",
          "input": true,
          "defaultValue": true
      },
      {
          "label": "Checkbox",
          "description": "Description",
          "tooltip": "Tooltip",
          "shortcut": "A",
          "customClass": "Custom CSS ",
          "tableView": false,
          "redrawOn": "number",
          "validate": {
              "required": true,
              "customMessage": "Custom Error Message"
          },
          "errorLabel": "Error Label",
          "key": "checkbox1",
          "tags": [
              "checkbox"
          ],
          "type": "checkbox",
          "input": true,
          "defaultValue": true
      },
      {
          "label": "Radio",
          "description": "Description",
          "tooltip": "Tooltip",
          "shortcut": "B",
          "inputType": "radio",
          "customClass": "Custom CSS",
          "tableView": false,
          "redrawOn": "number",
          "validate": {
              "required": true,
              "customMessage": "Custom Error Message"
          },
          "errorLabel": "Error Label",
          "key": "radio",
          "tags": [
              "radio"
          ],
          "type": "checkbox",
          "name": "Radio Key",
          "value": "Radio Value",
          "input": true,
          "defaultValue": false,
          "labelWidth": 1,
          "labelMargin": 3,
          "Radio Key": "Radio Value"
      },
      {
          "label": "Select Boxes",
          "labelPosition": "left-right",
          "optionsLabelPosition": "left",
          "description": "Description",
          "tooltip": "Tooltip",
          "customClass": "Custom CSS Class",
          "inline": true,
          "tableView": false,
          "defaultValue": {
              "": false
          },
          "values": [
              {
                  "label": "Label1",
                  "value": "Value1",
                  "shortcut": "C"
              },
              {
                  "label": "Label2",
                  "value": "label2",
                  "shortcut": ""
              },
              {
                  "label": "Label3",
                  "value": "label3",
                  "shortcut": ""
              }
          ],
          "redrawOn": "checkbox",
          "validate": {
              "required": true,
              "customMessage": "Custom Error Message",
              "minSelectedCount": 1,
              "maxSelectedCount": 3
          },
          "errorLabel": "Error Label",
          "key": "selectBoxes",
          "tags": [
              "selectBoxes"
          ],
          "type": "selectboxes",
          "input": true,
          "inputType": "checkbox",
          "labelWidth": 10,
          "labelMargin": 12
      },
      {
          "label": "select an account",
          "labelPosition": "left-left",
          "widget": "html5",
          "placeholder": "Please enter account",
          "description": "Description of the label",
          "tooltip": "Tooltip of the label",
          "customClass": "Account_input",
          "tabindex": "1",
          "tableView": true,
          "data": {
              "values": [
                  {
                      "label": "Label1",
                      "value": "label1"
                  },
                  {
                      "label": "Label2",
                      "value": "label2"
                  }
              ]
          },
          "dataType": "string",
          "idPath": "id_select",
          "refreshOn": "select",
          "selectThreshold": 0.3,
          "validate": {
              "required": true,
              "customMessage": "Ne vibrano"
          },
          "errorLabel": "Select account",
          "key": "selectAnAccount",
          "attributes": {
              "Layout Att": "Att value"
          },
          "type": "select",
          "indexeddb": {
              "filter": {}
          },
          "labelWidth": 20,
          "labelMargin": 5,
          "input": true
      },
      {
          "label": "Submit",
          "showValidations": false,
          "tableView": false,
          "key": "submit",
          "type": "button",
          "input": true
      },
      {
          "label": "Url",
          "labelPosition": "left-right",
          "placeholder": "Placeholder",
          "description": "Description",
          "tooltip": "Tooltip",
          "prefix": "a",
          "suffix": "b",
          "customClass": "Custom CSS Class",
          "autocomplete": "on",
          "tableView": true,
          "defaultValue": "www.point.md",
          "protected": true,
          "dbIndex": true,
          "encrypted": true,
          "redrawOn": "password",
          "validate": {
              "required": true,
              "customMessage": "Custom Error Message",
              "minLength": 2,
              "maxLength": 13
          },
          "errorLabel": "Error Label",
          "key": "url",
          "tags": [
              "url"
          ],
          "attributes": {
              "radio": "1"
          },
          "type": "url",
          "input": true,
          "labelWidth": 2,
          "labelMargin": 5
      },
      {
          "label": "Phone Number",
          "placeholder": "Placeholder",
          "description": "Description\r\n",
          "tooltip": "Tooltip",
          "prefix": "a",
          "suffix": "b",
          "customClass": "Custom CSS Class",
          "autocomplete": "on",
          "tableView": true,
          "multiple": true,
          "defaultValue": [
              "Муждугородний",
              "Местный"
          ],
          "case": "mixed",
          "redrawOn": "checkbox",
          "validate": {
              "required": true,
              "customMessage": "Custom Error Message",
              "multiple": true
          },
          "errorLabel": "Error Label",
          "key": "phoneNumber",
          "tags": [
              "phoneNumber"
          ],
          "type": "phoneNumber",
          "input": true
      },
      {
          "label": "Tags",
          "placeholder": "Placeholder",
          "description": "Description",
          "tooltip": "Tooltip",
          "customClass": "Custom CSS Class",
          "autofocus": true,
          "tableView": false,
          "defaultValue": "horse",
          "delimeter": "1",
          "maxTags": 1,
          "storeas": "array",
          "redrawOn": "number",
          "validate": {
              "required": true,
              "customMessage": "Custom Error Message"
          },
          "errorLabel": "Error Label",
          "key": "tags",
          "tags": [
              "tags"
          ],
          "type": "tags",
          "input": true
      }
  ]
}
  public form: Object = {
    components: []
  };;

  onChange(event) {
     this.remp = event.form;
     
  }

  renderOnChange(event){
    
  }

  sendSchema(){    
    if(this.remp === undefined){
      this.formSrc= this.form;
    }
    else{
      this.formSrc= this.remp;
/*       this.http.post('http://localhost:3000/save',this.formSrc)
      .subscribe((el)=>console.log(el)) */
    }
  }

  saveToJson(){
  this.jsonResult = JSON.stringify(this.form, null, 4);
/*     this.jsonElement.nativeElement.innerHTML = '';
    this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(this.form, null, 4))); */
  }

  onSubmit(event){
    console.log( event)
    this.formSrc= this.remp;
    this.datarResult =  JSON.stringify(event.data, null, 4); 
    console.log( this.formSrc)
  /*   this.http.post('http://localhost:3000/data',event)
    .subscribe((el)=>console.log(el)) */
  }

  viewinBuilder(){
    if(this.formSrc !== undefined){
      this.form = this.formSrc;
    }  
  }

  render(){
    this.form =this.jsonFile;
  /*   this.http.get('http://localhost:3000/render')
    .subscribe(function(response:any){
      console.log(response)

      this.formSrc=response;
      console.log( this.formSrc)
    }
   
    ) */
 
  }

  reset(){
    this.datarResult ='';
    this.jsonResult = '';
  }


  submintForm(event){
    console.log(event)

  }
 
}
