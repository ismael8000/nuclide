"use strict";

let Observable;

module.exports = _client => {
  const remoteModule = {};

  remoteModule.dispose = function () {
    return _client.marshalArguments(Array.from(arguments), []).then(args => {
      return _client.callRemoteFunction("FlowService/dispose", "void", args);
    });
  };

  remoteModule.initialize = function (arg0, arg1) {
    return _client.marshalArguments(Array.from(arguments), [{
      name: "fileNotifier",
      type: {
        location: {
          type: "source",
          fileName: "FlowService.js",
          line: 91
        },
        kind: "named",
        name: "FileNotifier"
      }
    }, {
      name: "config",
      type: {
        location: {
          type: "source",
          fileName: "FlowService.js",
          line: 92
        },
        kind: "named",
        name: "FlowSettings"
      }
    }]).then(args => {
      return _client.callRemoteFunction("FlowService/initialize", "promise", args);
    }).then(value => {
      return _client.unmarshal(value, {
        location: {
          type: "source",
          fileName: "FlowService.js",
          line: 93
        },
        kind: "named",
        name: "FlowLanguageServiceType"
      });
    });
  };

  remoteModule.FlowLanguageServiceType = class {
    getDiagnostics(arg0) {
      return _client.marshalArguments(Array.from(arguments), [{
        name: "fileVersion",
        type: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 161
          },
          kind: "named",
          name: "FileVersion"
        }
      }]).then(args => {
        return _client.marshal(this, {
          kind: "named",
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 159
          },
          name: "FlowLanguageServiceType"
        }).then(id => {
          return _client.callRemoteMethod(id, "getDiagnostics", "promise", args);
        });
      }).then(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 162
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "FlowService.js",
              line: 162
            },
            kind: "named",
            name: "DiagnosticProviderUpdate"
          }
        });
      });
    }

    observeDiagnostics() {
      return Observable.fromPromise(_client.marshalArguments(Array.from(arguments), []).then(args => {
        return _client.marshal(this, {
          kind: "named",
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 159
          },
          name: "FlowLanguageServiceType"
        }).then(id => {
          return _client.callRemoteMethod(id, "observeDiagnostics", "observable", args);
        });
      })).concatMap(id => id).concatMap(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 164
          },
          kind: "named",
          name: "FileDiagnosticUpdate"
        });
      }).publish();
    }

    getAutocompleteSuggestions(arg0, arg1, arg2, arg3) {
      return _client.marshalArguments(Array.from(arguments), [{
        name: "fileVersion",
        type: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 167
          },
          kind: "named",
          name: "FileVersion"
        }
      }, {
        name: "position",
        type: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 168
          },
          kind: "named",
          name: "atom$Point"
        }
      }, {
        name: "activatedManually",
        type: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 169
          },
          kind: "boolean"
        }
      }, {
        name: "prefix",
        type: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 170
          },
          kind: "string"
        }
      }]).then(args => {
        return _client.marshal(this, {
          kind: "named",
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 159
          },
          name: "FlowLanguageServiceType"
        }).then(id => {
          return _client.callRemoteMethod(id, "getAutocompleteSuggestions", "promise", args);
        });
      }).then(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 171
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "FlowService.js",
              line: 171
            },
            kind: "named",
            name: "AutocompleteResult"
          }
        });
      });
    }

    getDefinition(arg0, arg1) {
      return _client.marshalArguments(Array.from(arguments), [{
        name: "fileVersion",
        type: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 174
          },
          kind: "named",
          name: "FileVersion"
        }
      }, {
        name: "position",
        type: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 175
          },
          kind: "named",
          name: "atom$Point"
        }
      }]).then(args => {
        return _client.marshal(this, {
          kind: "named",
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 159
          },
          name: "FlowLanguageServiceType"
        }).then(id => {
          return _client.callRemoteMethod(id, "getDefinition", "promise", args);
        });
      }).then(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 176
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "FlowService.js",
              line: 176
            },
            kind: "named",
            name: "DefinitionQueryResult"
          }
        });
      });
    }

    getDefinitionById(arg0, arg1) {
      return _client.marshalArguments(Array.from(arguments), [{
        name: "file",
        type: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 179
          },
          kind: "named",
          name: "NuclideUri"
        }
      }, {
        name: "id",
        type: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 180
          },
          kind: "string"
        }
      }]).then(args => {
        return _client.marshal(this, {
          kind: "named",
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 159
          },
          name: "FlowLanguageServiceType"
        }).then(id => {
          return _client.callRemoteMethod(id, "getDefinitionById", "promise", args);
        });
      }).then(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 181
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "FlowService.js",
              line: 181
            },
            kind: "named",
            name: "Definition"
          }
        });
      });
    }

    findReferences(arg0, arg1) {
      return _client.marshalArguments(Array.from(arguments), [{
        name: "fileVersion",
        type: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 184
          },
          kind: "named",
          name: "FileVersion"
        }
      }, {
        name: "position",
        type: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 185
          },
          kind: "named",
          name: "atom$Point"
        }
      }]).then(args => {
        return _client.marshal(this, {
          kind: "named",
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 159
          },
          name: "FlowLanguageServiceType"
        }).then(id => {
          return _client.callRemoteMethod(id, "findReferences", "promise", args);
        });
      }).then(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 186
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "FlowService.js",
              line: 186
            },
            kind: "named",
            name: "FindReferencesReturn"
          }
        });
      });
    }

    getCoverage(arg0) {
      return _client.marshalArguments(Array.from(arguments), [{
        name: "filePath",
        type: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 189
          },
          kind: "named",
          name: "NuclideUri"
        }
      }]).then(args => {
        return _client.marshal(this, {
          kind: "named",
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 159
          },
          name: "FlowLanguageServiceType"
        }).then(id => {
          return _client.callRemoteMethod(id, "getCoverage", "promise", args);
        });
      }).then(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 190
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "FlowService.js",
              line: 190
            },
            kind: "named",
            name: "CoverageResult"
          }
        });
      });
    }

    getOutline(arg0) {
      return _client.marshalArguments(Array.from(arguments), [{
        name: "fileVersion",
        type: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 193
          },
          kind: "named",
          name: "FileVersion"
        }
      }]).then(args => {
        return _client.marshal(this, {
          kind: "named",
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 159
          },
          name: "FlowLanguageServiceType"
        }).then(id => {
          return _client.callRemoteMethod(id, "getOutline", "promise", args);
        });
      }).then(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 194
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "FlowService.js",
              line: 194
            },
            kind: "named",
            name: "Outline"
          }
        });
      });
    }

    typeHint(arg0, arg1) {
      return _client.marshalArguments(Array.from(arguments), [{
        name: "fileVersion",
        type: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 196
          },
          kind: "named",
          name: "FileVersion"
        }
      }, {
        name: "position",
        type: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 196
          },
          kind: "named",
          name: "atom$Point"
        }
      }]).then(args => {
        return _client.marshal(this, {
          kind: "named",
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 159
          },
          name: "FlowLanguageServiceType"
        }).then(id => {
          return _client.callRemoteMethod(id, "typeHint", "promise", args);
        });
      }).then(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 196
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "FlowService.js",
              line: 196
            },
            kind: "named",
            name: "TypeHint"
          }
        });
      });
    }

    highlight(arg0, arg1) {
      return _client.marshalArguments(Array.from(arguments), [{
        name: "fileVersion",
        type: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 199
          },
          kind: "named",
          name: "FileVersion"
        }
      }, {
        name: "position",
        type: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 200
          },
          kind: "named",
          name: "atom$Point"
        }
      }]).then(args => {
        return _client.marshal(this, {
          kind: "named",
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 159
          },
          name: "FlowLanguageServiceType"
        }).then(id => {
          return _client.callRemoteMethod(id, "highlight", "promise", args);
        });
      }).then(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 201
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "FlowService.js",
              line: 201
            },
            kind: "array",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 201
              },
              kind: "named",
              name: "atom$Range"
            }
          }
        });
      });
    }

    formatSource(arg0, arg1) {
      return _client.marshalArguments(Array.from(arguments), [{
        name: "fileVersion",
        type: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 204
          },
          kind: "named",
          name: "FileVersion"
        }
      }, {
        name: "range",
        type: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 205
          },
          kind: "named",
          name: "atom$Range"
        }
      }]).then(args => {
        return _client.marshal(this, {
          kind: "named",
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 159
          },
          name: "FlowLanguageServiceType"
        }).then(id => {
          return _client.callRemoteMethod(id, "formatSource", "promise", args);
        });
      }).then(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 206
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "FlowService.js",
              line: 206
            },
            kind: "array",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 206
              },
              kind: "named",
              name: "TextEdit"
            }
          }
        });
      });
    }

    formatEntireFile(arg0, arg1) {
      return _client.marshalArguments(Array.from(arguments), [{
        name: "fileVersion",
        type: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 208
          },
          kind: "named",
          name: "FileVersion"
        }
      }, {
        name: "range",
        type: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 208
          },
          kind: "named",
          name: "atom$Range"
        }
      }]).then(args => {
        return _client.marshal(this, {
          kind: "named",
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 159
          },
          name: "FlowLanguageServiceType"
        }).then(id => {
          return _client.callRemoteMethod(id, "formatEntireFile", "promise", args);
        });
      }).then(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 208
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "FlowService.js",
              line: 208
            },
            kind: "object",
            fields: [{
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 209
              },
              name: "newCursor",
              type: {
                location: {
                  type: "source",
                  fileName: "FlowService.js",
                  line: 209
                },
                kind: "number"
              },
              optional: true
            }, {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 210
              },
              name: "formatted",
              type: {
                location: {
                  type: "source",
                  fileName: "FlowService.js",
                  line: 210
                },
                kind: "string"
              },
              optional: false
            }]
          }
        });
      });
    }

    getEvaluationExpression(arg0, arg1) {
      return _client.marshalArguments(Array.from(arguments), [{
        name: "fileVersion",
        type: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 214
          },
          kind: "named",
          name: "FileVersion"
        }
      }, {
        name: "position",
        type: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 215
          },
          kind: "named",
          name: "atom$Point"
        }
      }]).then(args => {
        return _client.marshal(this, {
          kind: "named",
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 159
          },
          name: "FlowLanguageServiceType"
        }).then(id => {
          return _client.callRemoteMethod(id, "getEvaluationExpression", "promise", args);
        });
      }).then(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 216
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "FlowService.js",
              line: 216
            },
            kind: "named",
            name: "NuclideEvaluationExpression"
          }
        });
      });
    }

    supportsSymbolSearch(arg0) {
      return _client.marshalArguments(Array.from(arguments), [{
        name: "directories",
        type: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 219
          },
          kind: "array",
          type: {
            location: {
              type: "source",
              fileName: "FlowService.js",
              line: 219
            },
            kind: "named",
            name: "NuclideUri"
          }
        }
      }]).then(args => {
        return _client.marshal(this, {
          kind: "named",
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 159
          },
          name: "FlowLanguageServiceType"
        }).then(id => {
          return _client.callRemoteMethod(id, "supportsSymbolSearch", "promise", args);
        });
      }).then(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 220
          },
          kind: "boolean"
        });
      });
    }

    symbolSearch(arg0, arg1) {
      return _client.marshalArguments(Array.from(arguments), [{
        name: "query",
        type: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 223
          },
          kind: "string"
        }
      }, {
        name: "directories",
        type: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 224
          },
          kind: "array",
          type: {
            location: {
              type: "source",
              fileName: "FlowService.js",
              line: 224
            },
            kind: "named",
            name: "NuclideUri"
          }
        }
      }]).then(args => {
        return _client.marshal(this, {
          kind: "named",
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 159
          },
          name: "FlowLanguageServiceType"
        }).then(id => {
          return _client.callRemoteMethod(id, "symbolSearch", "promise", args);
        });
      }).then(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 225
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "FlowService.js",
              line: 225
            },
            kind: "array",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 225
              },
              kind: "named",
              name: "SymbolResult"
            }
          }
        });
      });
    }

    getProjectRoot(arg0) {
      return _client.marshalArguments(Array.from(arguments), [{
        name: "fileUri",
        type: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 227
          },
          kind: "named",
          name: "NuclideUri"
        }
      }]).then(args => {
        return _client.marshal(this, {
          kind: "named",
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 159
          },
          name: "FlowLanguageServiceType"
        }).then(id => {
          return _client.callRemoteMethod(id, "getProjectRoot", "promise", args);
        });
      }).then(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 227
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "FlowService.js",
              line: 227
            },
            kind: "named",
            name: "NuclideUri"
          }
        });
      });
    }

    isFileInProject(arg0) {
      return _client.marshalArguments(Array.from(arguments), [{
        name: "fileUri",
        type: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 229
          },
          kind: "named",
          name: "NuclideUri"
        }
      }]).then(args => {
        return _client.marshal(this, {
          kind: "named",
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 159
          },
          name: "FlowLanguageServiceType"
        }).then(id => {
          return _client.callRemoteMethod(id, "isFileInProject", "promise", args);
        });
      }).then(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 229
          },
          kind: "boolean"
        });
      });
    }

    getServerStatusUpdates() {
      return Observable.fromPromise(_client.marshalArguments(Array.from(arguments), []).then(args => {
        return _client.marshal(this, {
          kind: "named",
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 159
          },
          name: "FlowLanguageServiceType"
        }).then(id => {
          return _client.callRemoteMethod(id, "getServerStatusUpdates", "observable", args);
        });
      })).concatMap(id => id).concatMap(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 231
          },
          kind: "named",
          name: "ServerStatusUpdate"
        });
      }).publish();
    }

    allowServerRestart() {
      return _client.marshalArguments(Array.from(arguments), []).then(args => {
        return _client.marshal(this, {
          kind: "named",
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 159
          },
          name: "FlowLanguageServiceType"
        }).then(id => {
          return _client.callRemoteMethod(id, "allowServerRestart", "promise", args);
        });
      }).then(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 233
          },
          kind: "void"
        });
      });
    }

    dispose() {
      return _client.disposeRemoteObject(this);
    }

  };

  remoteModule.flowGetAst = function (arg0, arg1) {
    return _client.marshalArguments(Array.from(arguments), [{
      name: "file",
      type: {
        location: {
          type: "source",
          fileName: "FlowService.js",
          line: 239
        },
        kind: "nullable",
        type: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 239
          },
          kind: "named",
          name: "NuclideUri"
        }
      }
    }, {
      name: "currentContents",
      type: {
        location: {
          type: "source",
          fileName: "FlowService.js",
          line: 240
        },
        kind: "string"
      }
    }]).then(args => {
      return _client.callRemoteFunction("FlowService/flowGetAst", "promise", args);
    }).then(value => {
      return _client.unmarshal(value, {
        location: {
          type: "source",
          fileName: "FlowService.js",
          line: 241
        },
        kind: "nullable",
        type: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 241
          },
          kind: "any"
        }
      });
    });
  };

  remoteModule.LanguageService = class {
    getDiagnostics(arg0) {
      return _client.marshalArguments(Array.from(arguments), [{
        name: "fileVersion",
        type: {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 70
          },
          kind: "named",
          name: "FileVersion"
        }
      }]).then(args => {
        return _client.marshal(this, {
          kind: "named",
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 67
          },
          name: "LanguageService"
        }).then(id => {
          return _client.callRemoteMethod(id, "getDiagnostics", "promise", args);
        });
      }).then(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 71
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 71
            },
            kind: "named",
            name: "DiagnosticProviderUpdate"
          }
        });
      });
    }

    observeDiagnostics() {
      return Observable.fromPromise(_client.marshalArguments(Array.from(arguments), []).then(args => {
        return _client.marshal(this, {
          kind: "named",
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 67
          },
          name: "LanguageService"
        }).then(id => {
          return _client.callRemoteMethod(id, "observeDiagnostics", "observable", args);
        });
      })).concatMap(id => id).concatMap(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 73
          },
          kind: "named",
          name: "FileDiagnosticUpdate"
        });
      }).publish();
    }

    getAutocompleteSuggestions(arg0, arg1, arg2, arg3) {
      return _client.marshalArguments(Array.from(arguments), [{
        name: "fileVersion",
        type: {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 76
          },
          kind: "named",
          name: "FileVersion"
        }
      }, {
        name: "position",
        type: {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 77
          },
          kind: "named",
          name: "atom$Point"
        }
      }, {
        name: "activatedManually",
        type: {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 78
          },
          kind: "boolean"
        }
      }, {
        name: "prefix",
        type: {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 79
          },
          kind: "string"
        }
      }]).then(args => {
        return _client.marshal(this, {
          kind: "named",
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 67
          },
          name: "LanguageService"
        }).then(id => {
          return _client.callRemoteMethod(id, "getAutocompleteSuggestions", "promise", args);
        });
      }).then(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 80
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 80
            },
            kind: "named",
            name: "AutocompleteResult"
          }
        });
      });
    }

    getDefinition(arg0, arg1) {
      return _client.marshalArguments(Array.from(arguments), [{
        name: "fileVersion",
        type: {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 83
          },
          kind: "named",
          name: "FileVersion"
        }
      }, {
        name: "position",
        type: {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 84
          },
          kind: "named",
          name: "atom$Point"
        }
      }]).then(args => {
        return _client.marshal(this, {
          kind: "named",
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 67
          },
          name: "LanguageService"
        }).then(id => {
          return _client.callRemoteMethod(id, "getDefinition", "promise", args);
        });
      }).then(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 85
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 85
            },
            kind: "named",
            name: "DefinitionQueryResult"
          }
        });
      });
    }

    getDefinitionById(arg0, arg1) {
      return _client.marshalArguments(Array.from(arguments), [{
        name: "file",
        type: {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 88
          },
          kind: "named",
          name: "NuclideUri"
        }
      }, {
        name: "id",
        type: {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 89
          },
          kind: "string"
        }
      }]).then(args => {
        return _client.marshal(this, {
          kind: "named",
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 67
          },
          name: "LanguageService"
        }).then(id => {
          return _client.callRemoteMethod(id, "getDefinitionById", "promise", args);
        });
      }).then(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 90
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 90
            },
            kind: "named",
            name: "Definition"
          }
        });
      });
    }

    findReferences(arg0, arg1) {
      return _client.marshalArguments(Array.from(arguments), [{
        name: "fileVersion",
        type: {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 93
          },
          kind: "named",
          name: "FileVersion"
        }
      }, {
        name: "position",
        type: {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 94
          },
          kind: "named",
          name: "atom$Point"
        }
      }]).then(args => {
        return _client.marshal(this, {
          kind: "named",
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 67
          },
          name: "LanguageService"
        }).then(id => {
          return _client.callRemoteMethod(id, "findReferences", "promise", args);
        });
      }).then(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 95
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 95
            },
            kind: "named",
            name: "FindReferencesReturn"
          }
        });
      });
    }

    getCoverage(arg0) {
      return _client.marshalArguments(Array.from(arguments), [{
        name: "filePath",
        type: {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 98
          },
          kind: "named",
          name: "NuclideUri"
        }
      }]).then(args => {
        return _client.marshal(this, {
          kind: "named",
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 67
          },
          name: "LanguageService"
        }).then(id => {
          return _client.callRemoteMethod(id, "getCoverage", "promise", args);
        });
      }).then(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 99
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 99
            },
            kind: "named",
            name: "CoverageResult"
          }
        });
      });
    }

    getOutline(arg0) {
      return _client.marshalArguments(Array.from(arguments), [{
        name: "fileVersion",
        type: {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 102
          },
          kind: "named",
          name: "FileVersion"
        }
      }]).then(args => {
        return _client.marshal(this, {
          kind: "named",
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 67
          },
          name: "LanguageService"
        }).then(id => {
          return _client.callRemoteMethod(id, "getOutline", "promise", args);
        });
      }).then(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 103
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 103
            },
            kind: "named",
            name: "Outline"
          }
        });
      });
    }

    typeHint(arg0, arg1) {
      return _client.marshalArguments(Array.from(arguments), [{
        name: "fileVersion",
        type: {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 105
          },
          kind: "named",
          name: "FileVersion"
        }
      }, {
        name: "position",
        type: {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 105
          },
          kind: "named",
          name: "atom$Point"
        }
      }]).then(args => {
        return _client.marshal(this, {
          kind: "named",
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 67
          },
          name: "LanguageService"
        }).then(id => {
          return _client.callRemoteMethod(id, "typeHint", "promise", args);
        });
      }).then(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 105
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 105
            },
            kind: "named",
            name: "TypeHint"
          }
        });
      });
    }

    highlight(arg0, arg1) {
      return _client.marshalArguments(Array.from(arguments), [{
        name: "fileVersion",
        type: {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 108
          },
          kind: "named",
          name: "FileVersion"
        }
      }, {
        name: "position",
        type: {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 109
          },
          kind: "named",
          name: "atom$Point"
        }
      }]).then(args => {
        return _client.marshal(this, {
          kind: "named",
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 67
          },
          name: "LanguageService"
        }).then(id => {
          return _client.callRemoteMethod(id, "highlight", "promise", args);
        });
      }).then(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 110
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 110
            },
            kind: "array",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 110
              },
              kind: "named",
              name: "atom$Range"
            }
          }
        });
      });
    }

    formatSource(arg0, arg1) {
      return _client.marshalArguments(Array.from(arguments), [{
        name: "fileVersion",
        type: {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 113
          },
          kind: "named",
          name: "FileVersion"
        }
      }, {
        name: "range",
        type: {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 114
          },
          kind: "named",
          name: "atom$Range"
        }
      }]).then(args => {
        return _client.marshal(this, {
          kind: "named",
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 67
          },
          name: "LanguageService"
        }).then(id => {
          return _client.callRemoteMethod(id, "formatSource", "promise", args);
        });
      }).then(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 115
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 115
            },
            kind: "array",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 115
              },
              kind: "named",
              name: "TextEdit"
            }
          }
        });
      });
    }

    formatEntireFile(arg0, arg1) {
      return _client.marshalArguments(Array.from(arguments), [{
        name: "fileVersion",
        type: {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 117
          },
          kind: "named",
          name: "FileVersion"
        }
      }, {
        name: "range",
        type: {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 117
          },
          kind: "named",
          name: "atom$Range"
        }
      }]).then(args => {
        return _client.marshal(this, {
          kind: "named",
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 67
          },
          name: "LanguageService"
        }).then(id => {
          return _client.callRemoteMethod(id, "formatEntireFile", "promise", args);
        });
      }).then(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 117
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 117
            },
            kind: "object",
            fields: [{
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 118
              },
              name: "newCursor",
              type: {
                location: {
                  type: "source",
                  fileName: "LanguageService.js",
                  line: 118
                },
                kind: "number"
              },
              optional: true
            }, {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 119
              },
              name: "formatted",
              type: {
                location: {
                  type: "source",
                  fileName: "LanguageService.js",
                  line: 119
                },
                kind: "string"
              },
              optional: false
            }]
          }
        });
      });
    }

    getEvaluationExpression(arg0, arg1) {
      return _client.marshalArguments(Array.from(arguments), [{
        name: "fileVersion",
        type: {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 123
          },
          kind: "named",
          name: "FileVersion"
        }
      }, {
        name: "position",
        type: {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 124
          },
          kind: "named",
          name: "atom$Point"
        }
      }]).then(args => {
        return _client.marshal(this, {
          kind: "named",
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 67
          },
          name: "LanguageService"
        }).then(id => {
          return _client.callRemoteMethod(id, "getEvaluationExpression", "promise", args);
        });
      }).then(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 125
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 125
            },
            kind: "named",
            name: "NuclideEvaluationExpression"
          }
        });
      });
    }

    supportsSymbolSearch(arg0) {
      return _client.marshalArguments(Array.from(arguments), [{
        name: "directories",
        type: {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 128
          },
          kind: "array",
          type: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 128
            },
            kind: "named",
            name: "NuclideUri"
          }
        }
      }]).then(args => {
        return _client.marshal(this, {
          kind: "named",
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 67
          },
          name: "LanguageService"
        }).then(id => {
          return _client.callRemoteMethod(id, "supportsSymbolSearch", "promise", args);
        });
      }).then(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 129
          },
          kind: "boolean"
        });
      });
    }

    symbolSearch(arg0, arg1) {
      return _client.marshalArguments(Array.from(arguments), [{
        name: "query",
        type: {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 132
          },
          kind: "string"
        }
      }, {
        name: "directories",
        type: {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 133
          },
          kind: "array",
          type: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 133
            },
            kind: "named",
            name: "NuclideUri"
          }
        }
      }]).then(args => {
        return _client.marshal(this, {
          kind: "named",
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 67
          },
          name: "LanguageService"
        }).then(id => {
          return _client.callRemoteMethod(id, "symbolSearch", "promise", args);
        });
      }).then(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 134
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 134
            },
            kind: "array",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 134
              },
              kind: "named",
              name: "SymbolResult"
            }
          }
        });
      });
    }

    getProjectRoot(arg0) {
      return _client.marshalArguments(Array.from(arguments), [{
        name: "fileUri",
        type: {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 136
          },
          kind: "named",
          name: "NuclideUri"
        }
      }]).then(args => {
        return _client.marshal(this, {
          kind: "named",
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 67
          },
          name: "LanguageService"
        }).then(id => {
          return _client.callRemoteMethod(id, "getProjectRoot", "promise", args);
        });
      }).then(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 136
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 136
            },
            kind: "named",
            name: "NuclideUri"
          }
        });
      });
    }

    isFileInProject(arg0) {
      return _client.marshalArguments(Array.from(arguments), [{
        name: "fileUri",
        type: {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 138
          },
          kind: "named",
          name: "NuclideUri"
        }
      }]).then(args => {
        return _client.marshal(this, {
          kind: "named",
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 67
          },
          name: "LanguageService"
        }).then(id => {
          return _client.callRemoteMethod(id, "isFileInProject", "promise", args);
        });
      }).then(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 138
          },
          kind: "boolean"
        });
      });
    }

    dispose() {
      return _client.disposeRemoteObject(this);
    }

  };
  remoteModule.FileNotifier = class {
    onFileEvent(arg0) {
      return _client.marshalArguments(Array.from(arguments), [{
        name: "event",
        type: {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 47
          },
          kind: "named",
          name: "FileEvent"
        }
      }]).then(args => {
        return _client.marshal(this, {
          kind: "named",
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 46
          },
          name: "FileNotifier"
        }).then(id => {
          return _client.callRemoteMethod(id, "onFileEvent", "promise", args);
        });
      }).then(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 47
          },
          kind: "void"
        });
      });
    }

    onDirectoriesChanged(arg0) {
      return _client.marshalArguments(Array.from(arguments), [{
        name: "openDirectories",
        type: {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 48
          },
          kind: "set",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 48
            },
            kind: "named",
            name: "NuclideUri"
          }
        }
      }]).then(args => {
        return _client.marshal(this, {
          kind: "named",
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 46
          },
          name: "FileNotifier"
        }).then(id => {
          return _client.callRemoteMethod(id, "onDirectoriesChanged", "promise", args);
        });
      }).then(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 48
          },
          kind: "void"
        });
      });
    }

    dispose() {
      return _client.disposeRemoteObject(this);
    }

  };
  return remoteModule;
};

Object.defineProperty(module.exports, "inject", {
  value: function () {
    Observable = arguments[0];
  }
});
Object.defineProperty(module.exports, "defs", {
  value: {
    Object: {
      kind: "alias",
      name: "Object",
      location: {
        type: "builtin"
      }
    },
    Date: {
      kind: "alias",
      name: "Date",
      location: {
        type: "builtin"
      }
    },
    RegExp: {
      kind: "alias",
      name: "RegExp",
      location: {
        type: "builtin"
      }
    },
    Buffer: {
      kind: "alias",
      name: "Buffer",
      location: {
        type: "builtin"
      }
    },
    "fs.Stats": {
      kind: "alias",
      name: "fs.Stats",
      location: {
        type: "builtin"
      }
    },
    NuclideUri: {
      kind: "alias",
      name: "NuclideUri",
      location: {
        type: "builtin"
      }
    },
    atom$Point: {
      kind: "alias",
      name: "atom$Point",
      location: {
        type: "builtin"
      }
    },
    atom$Range: {
      kind: "alias",
      name: "atom$Range",
      location: {
        type: "builtin"
      }
    },
    Loc: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "FlowService.js",
        line: 45
      },
      name: "Loc",
      definition: {
        location: {
          type: "source",
          fileName: "FlowService.js",
          line: 45
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 46
          },
          name: "file",
          type: {
            location: {
              type: "source",
              fileName: "FlowService.js",
              line: 46
            },
            kind: "named",
            name: "NuclideUri"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 47
          },
          name: "point",
          type: {
            location: {
              type: "source",
              fileName: "FlowService.js",
              line: 47
            },
            kind: "named",
            name: "atom$Point"
          },
          optional: false
        }]
      }
    },
    ServerStatusType: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "FlowService.js",
        line: 52
      },
      name: "ServerStatusType",
      definition: {
        location: {
          type: "source",
          fileName: "FlowService.js",
          line: 53
        },
        kind: "union",
        types: [{
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 53
          },
          kind: "string-literal",
          value: "failed"
        }, {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 54
          },
          kind: "string-literal",
          value: "unknown"
        }, {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 55
          },
          kind: "string-literal",
          value: "not running"
        }, {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 56
          },
          kind: "string-literal",
          value: "not installed"
        }, {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 57
          },
          kind: "string-literal",
          value: "busy"
        }, {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 58
          },
          kind: "string-literal",
          value: "init"
        }, {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 59
          },
          kind: "string-literal",
          value: "ready"
        }]
      }
    },
    ServerStatusUpdate: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "FlowService.js",
        line: 61
      },
      name: "ServerStatusUpdate",
      definition: {
        location: {
          type: "source",
          fileName: "FlowService.js",
          line: 61
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 62
          },
          name: "pathToRoot",
          type: {
            location: {
              type: "source",
              fileName: "FlowService.js",
              line: 62
            },
            kind: "named",
            name: "NuclideUri"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 63
          },
          name: "status",
          type: {
            location: {
              type: "source",
              fileName: "FlowService.js",
              line: 63
            },
            kind: "named",
            name: "ServerStatusType"
          },
          optional: false
        }]
      }
    },
    FlowSettings: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "FlowService.js",
        line: 66
      },
      name: "FlowSettings",
      definition: {
        location: {
          type: "source",
          fileName: "FlowService.js",
          line: 66
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 67
          },
          name: "functionSnippetShouldIncludeArguments",
          type: {
            location: {
              type: "source",
              fileName: "FlowService.js",
              line: 67
            },
            kind: "boolean"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 68
          },
          name: "stopFlowOnExit",
          type: {
            location: {
              type: "source",
              fileName: "FlowService.js",
              line: 68
            },
            kind: "boolean"
          },
          optional: false
        }]
      }
    },
    dispose: {
      kind: "function",
      name: "dispose",
      location: {
        type: "source",
        fileName: "FlowService.js",
        line: 83
      },
      type: {
        location: {
          type: "source",
          fileName: "FlowService.js",
          line: 83
        },
        kind: "function",
        argumentTypes: [],
        returnType: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 83
          },
          kind: "void"
        }
      }
    },
    initialize: {
      kind: "function",
      name: "initialize",
      location: {
        type: "source",
        fileName: "FlowService.js",
        line: 90
      },
      type: {
        location: {
          type: "source",
          fileName: "FlowService.js",
          line: 90
        },
        kind: "function",
        argumentTypes: [{
          name: "fileNotifier",
          type: {
            location: {
              type: "source",
              fileName: "FlowService.js",
              line: 91
            },
            kind: "named",
            name: "FileNotifier"
          }
        }, {
          name: "config",
          type: {
            location: {
              type: "source",
              fileName: "FlowService.js",
              line: 92
            },
            kind: "named",
            name: "FlowSettings"
          }
        }],
        returnType: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 93
          },
          kind: "promise",
          type: {
            location: {
              type: "source",
              fileName: "FlowService.js",
              line: 93
            },
            kind: "named",
            name: "FlowLanguageServiceType"
          }
        }
      }
    },
    FlowLanguageServiceType: {
      kind: "interface",
      name: "FlowLanguageServiceType",
      location: {
        type: "source",
        fileName: "FlowService.js",
        line: 159
      },
      constructorArgs: null,
      staticMethods: {},
      instanceMethods: {
        getDiagnostics: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 160
          },
          kind: "function",
          argumentTypes: [{
            name: "fileVersion",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 161
              },
              kind: "named",
              name: "FileVersion"
            }
          }],
          returnType: {
            location: {
              type: "source",
              fileName: "FlowService.js",
              line: 162
            },
            kind: "promise",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 162
              },
              kind: "nullable",
              type: {
                location: {
                  type: "source",
                  fileName: "FlowService.js",
                  line: 162
                },
                kind: "named",
                name: "DiagnosticProviderUpdate"
              }
            }
          }
        },
        observeDiagnostics: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 164
          },
          kind: "function",
          argumentTypes: [],
          returnType: {
            location: {
              type: "source",
              fileName: "FlowService.js",
              line: 164
            },
            kind: "observable",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 164
              },
              kind: "named",
              name: "FileDiagnosticUpdate"
            }
          }
        },
        getAutocompleteSuggestions: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 166
          },
          kind: "function",
          argumentTypes: [{
            name: "fileVersion",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 167
              },
              kind: "named",
              name: "FileVersion"
            }
          }, {
            name: "position",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 168
              },
              kind: "named",
              name: "atom$Point"
            }
          }, {
            name: "activatedManually",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 169
              },
              kind: "boolean"
            }
          }, {
            name: "prefix",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 170
              },
              kind: "string"
            }
          }],
          returnType: {
            location: {
              type: "source",
              fileName: "FlowService.js",
              line: 171
            },
            kind: "promise",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 171
              },
              kind: "nullable",
              type: {
                location: {
                  type: "source",
                  fileName: "FlowService.js",
                  line: 171
                },
                kind: "named",
                name: "AutocompleteResult"
              }
            }
          }
        },
        getDefinition: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 173
          },
          kind: "function",
          argumentTypes: [{
            name: "fileVersion",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 174
              },
              kind: "named",
              name: "FileVersion"
            }
          }, {
            name: "position",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 175
              },
              kind: "named",
              name: "atom$Point"
            }
          }],
          returnType: {
            location: {
              type: "source",
              fileName: "FlowService.js",
              line: 176
            },
            kind: "promise",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 176
              },
              kind: "nullable",
              type: {
                location: {
                  type: "source",
                  fileName: "FlowService.js",
                  line: 176
                },
                kind: "named",
                name: "DefinitionQueryResult"
              }
            }
          }
        },
        getDefinitionById: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 178
          },
          kind: "function",
          argumentTypes: [{
            name: "file",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 179
              },
              kind: "named",
              name: "NuclideUri"
            }
          }, {
            name: "id",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 180
              },
              kind: "string"
            }
          }],
          returnType: {
            location: {
              type: "source",
              fileName: "FlowService.js",
              line: 181
            },
            kind: "promise",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 181
              },
              kind: "nullable",
              type: {
                location: {
                  type: "source",
                  fileName: "FlowService.js",
                  line: 181
                },
                kind: "named",
                name: "Definition"
              }
            }
          }
        },
        findReferences: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 183
          },
          kind: "function",
          argumentTypes: [{
            name: "fileVersion",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 184
              },
              kind: "named",
              name: "FileVersion"
            }
          }, {
            name: "position",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 185
              },
              kind: "named",
              name: "atom$Point"
            }
          }],
          returnType: {
            location: {
              type: "source",
              fileName: "FlowService.js",
              line: 186
            },
            kind: "promise",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 186
              },
              kind: "nullable",
              type: {
                location: {
                  type: "source",
                  fileName: "FlowService.js",
                  line: 186
                },
                kind: "named",
                name: "FindReferencesReturn"
              }
            }
          }
        },
        getCoverage: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 188
          },
          kind: "function",
          argumentTypes: [{
            name: "filePath",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 189
              },
              kind: "named",
              name: "NuclideUri"
            }
          }],
          returnType: {
            location: {
              type: "source",
              fileName: "FlowService.js",
              line: 190
            },
            kind: "promise",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 190
              },
              kind: "nullable",
              type: {
                location: {
                  type: "source",
                  fileName: "FlowService.js",
                  line: 190
                },
                kind: "named",
                name: "CoverageResult"
              }
            }
          }
        },
        getOutline: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 192
          },
          kind: "function",
          argumentTypes: [{
            name: "fileVersion",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 193
              },
              kind: "named",
              name: "FileVersion"
            }
          }],
          returnType: {
            location: {
              type: "source",
              fileName: "FlowService.js",
              line: 194
            },
            kind: "promise",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 194
              },
              kind: "nullable",
              type: {
                location: {
                  type: "source",
                  fileName: "FlowService.js",
                  line: 194
                },
                kind: "named",
                name: "Outline"
              }
            }
          }
        },
        typeHint: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 196
          },
          kind: "function",
          argumentTypes: [{
            name: "fileVersion",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 196
              },
              kind: "named",
              name: "FileVersion"
            }
          }, {
            name: "position",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 196
              },
              kind: "named",
              name: "atom$Point"
            }
          }],
          returnType: {
            location: {
              type: "source",
              fileName: "FlowService.js",
              line: 196
            },
            kind: "promise",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 196
              },
              kind: "nullable",
              type: {
                location: {
                  type: "source",
                  fileName: "FlowService.js",
                  line: 196
                },
                kind: "named",
                name: "TypeHint"
              }
            }
          }
        },
        highlight: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 198
          },
          kind: "function",
          argumentTypes: [{
            name: "fileVersion",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 199
              },
              kind: "named",
              name: "FileVersion"
            }
          }, {
            name: "position",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 200
              },
              kind: "named",
              name: "atom$Point"
            }
          }],
          returnType: {
            location: {
              type: "source",
              fileName: "FlowService.js",
              line: 201
            },
            kind: "promise",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 201
              },
              kind: "nullable",
              type: {
                location: {
                  type: "source",
                  fileName: "FlowService.js",
                  line: 201
                },
                kind: "array",
                type: {
                  location: {
                    type: "source",
                    fileName: "FlowService.js",
                    line: 201
                  },
                  kind: "named",
                  name: "atom$Range"
                }
              }
            }
          }
        },
        formatSource: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 203
          },
          kind: "function",
          argumentTypes: [{
            name: "fileVersion",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 204
              },
              kind: "named",
              name: "FileVersion"
            }
          }, {
            name: "range",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 205
              },
              kind: "named",
              name: "atom$Range"
            }
          }],
          returnType: {
            location: {
              type: "source",
              fileName: "FlowService.js",
              line: 206
            },
            kind: "promise",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 206
              },
              kind: "nullable",
              type: {
                location: {
                  type: "source",
                  fileName: "FlowService.js",
                  line: 206
                },
                kind: "array",
                type: {
                  location: {
                    type: "source",
                    fileName: "FlowService.js",
                    line: 206
                  },
                  kind: "named",
                  name: "TextEdit"
                }
              }
            }
          }
        },
        formatEntireFile: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 208
          },
          kind: "function",
          argumentTypes: [{
            name: "fileVersion",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 208
              },
              kind: "named",
              name: "FileVersion"
            }
          }, {
            name: "range",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 208
              },
              kind: "named",
              name: "atom$Range"
            }
          }],
          returnType: {
            location: {
              type: "source",
              fileName: "FlowService.js",
              line: 208
            },
            kind: "promise",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 208
              },
              kind: "nullable",
              type: {
                location: {
                  type: "source",
                  fileName: "FlowService.js",
                  line: 208
                },
                kind: "object",
                fields: [{
                  location: {
                    type: "source",
                    fileName: "FlowService.js",
                    line: 209
                  },
                  name: "newCursor",
                  type: {
                    location: {
                      type: "source",
                      fileName: "FlowService.js",
                      line: 209
                    },
                    kind: "number"
                  },
                  optional: true
                }, {
                  location: {
                    type: "source",
                    fileName: "FlowService.js",
                    line: 210
                  },
                  name: "formatted",
                  type: {
                    location: {
                      type: "source",
                      fileName: "FlowService.js",
                      line: 210
                    },
                    kind: "string"
                  },
                  optional: false
                }]
              }
            }
          }
        },
        getEvaluationExpression: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 213
          },
          kind: "function",
          argumentTypes: [{
            name: "fileVersion",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 214
              },
              kind: "named",
              name: "FileVersion"
            }
          }, {
            name: "position",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 215
              },
              kind: "named",
              name: "atom$Point"
            }
          }],
          returnType: {
            location: {
              type: "source",
              fileName: "FlowService.js",
              line: 216
            },
            kind: "promise",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 216
              },
              kind: "nullable",
              type: {
                location: {
                  type: "source",
                  fileName: "FlowService.js",
                  line: 216
                },
                kind: "named",
                name: "NuclideEvaluationExpression"
              }
            }
          }
        },
        supportsSymbolSearch: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 218
          },
          kind: "function",
          argumentTypes: [{
            name: "directories",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 219
              },
              kind: "array",
              type: {
                location: {
                  type: "source",
                  fileName: "FlowService.js",
                  line: 219
                },
                kind: "named",
                name: "NuclideUri"
              }
            }
          }],
          returnType: {
            location: {
              type: "source",
              fileName: "FlowService.js",
              line: 220
            },
            kind: "promise",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 220
              },
              kind: "boolean"
            }
          }
        },
        symbolSearch: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 222
          },
          kind: "function",
          argumentTypes: [{
            name: "query",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 223
              },
              kind: "string"
            }
          }, {
            name: "directories",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 224
              },
              kind: "array",
              type: {
                location: {
                  type: "source",
                  fileName: "FlowService.js",
                  line: 224
                },
                kind: "named",
                name: "NuclideUri"
              }
            }
          }],
          returnType: {
            location: {
              type: "source",
              fileName: "FlowService.js",
              line: 225
            },
            kind: "promise",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 225
              },
              kind: "nullable",
              type: {
                location: {
                  type: "source",
                  fileName: "FlowService.js",
                  line: 225
                },
                kind: "array",
                type: {
                  location: {
                    type: "source",
                    fileName: "FlowService.js",
                    line: 225
                  },
                  kind: "named",
                  name: "SymbolResult"
                }
              }
            }
          }
        },
        getProjectRoot: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 227
          },
          kind: "function",
          argumentTypes: [{
            name: "fileUri",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 227
              },
              kind: "named",
              name: "NuclideUri"
            }
          }],
          returnType: {
            location: {
              type: "source",
              fileName: "FlowService.js",
              line: 227
            },
            kind: "promise",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 227
              },
              kind: "nullable",
              type: {
                location: {
                  type: "source",
                  fileName: "FlowService.js",
                  line: 227
                },
                kind: "named",
                name: "NuclideUri"
              }
            }
          }
        },
        isFileInProject: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 229
          },
          kind: "function",
          argumentTypes: [{
            name: "fileUri",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 229
              },
              kind: "named",
              name: "NuclideUri"
            }
          }],
          returnType: {
            location: {
              type: "source",
              fileName: "FlowService.js",
              line: 229
            },
            kind: "promise",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 229
              },
              kind: "boolean"
            }
          }
        },
        getServerStatusUpdates: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 231
          },
          kind: "function",
          argumentTypes: [],
          returnType: {
            location: {
              type: "source",
              fileName: "FlowService.js",
              line: 231
            },
            kind: "observable",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 231
              },
              kind: "named",
              name: "ServerStatusUpdate"
            }
          }
        },
        allowServerRestart: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 233
          },
          kind: "function",
          argumentTypes: [],
          returnType: {
            location: {
              type: "source",
              fileName: "FlowService.js",
              line: 233
            },
            kind: "promise",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 233
              },
              kind: "void"
            }
          }
        },
        dispose: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 235
          },
          kind: "function",
          argumentTypes: [],
          returnType: {
            location: {
              type: "source",
              fileName: "FlowService.js",
              line: 235
            },
            kind: "void"
          }
        }
      }
    },
    flowGetAst: {
      kind: "function",
      name: "flowGetAst",
      location: {
        type: "source",
        fileName: "FlowService.js",
        line: 238
      },
      type: {
        location: {
          type: "source",
          fileName: "FlowService.js",
          line: 238
        },
        kind: "function",
        argumentTypes: [{
          name: "file",
          type: {
            location: {
              type: "source",
              fileName: "FlowService.js",
              line: 239
            },
            kind: "nullable",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 239
              },
              kind: "named",
              name: "NuclideUri"
            }
          }
        }, {
          name: "currentContents",
          type: {
            location: {
              type: "source",
              fileName: "FlowService.js",
              line: 240
            },
            kind: "string"
          }
        }],
        returnType: {
          location: {
            type: "source",
            fileName: "FlowService.js",
            line: 241
          },
          kind: "promise",
          type: {
            location: {
              type: "source",
              fileName: "FlowService.js",
              line: 241
            },
            kind: "nullable",
            type: {
              location: {
                type: "source",
                fileName: "FlowService.js",
                line: 241
              },
              kind: "any"
            }
          }
        }
      }
    },
    NuclideEvaluationExpression: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "rpc-types.js",
        line: 11
      },
      name: "NuclideEvaluationExpression",
      definition: {
        location: {
          type: "source",
          fileName: "rpc-types.js",
          line: 11
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 12
          },
          name: "range",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 12
            },
            kind: "named",
            name: "atom$Range"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 13
          },
          name: "expression",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 13
            },
            kind: "string"
          },
          optional: false
        }]
      }
    },
    TextEdit: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "rpc-types.js",
        line: 11
      },
      name: "TextEdit",
      definition: {
        location: {
          type: "source",
          fileName: "rpc-types.js",
          line: 11
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 12
          },
          name: "oldRange",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 12
            },
            kind: "named",
            name: "atom$Range"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 13
          },
          name: "newText",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 13
            },
            kind: "string"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 15
          },
          name: "oldText",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 15
            },
            kind: "string"
          },
          optional: true
        }]
      }
    },
    TypeHint: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "rpc-types.js",
        line: 11
      },
      name: "TypeHint",
      definition: {
        location: {
          type: "source",
          fileName: "rpc-types.js",
          line: 11
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 15
          },
          name: "hint",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 15
            },
            kind: "string"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 16
          },
          name: "range",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 16
            },
            kind: "named",
            name: "atom$Range"
          },
          optional: false
        }]
      }
    },
    OutlineTree: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "rpc-types.js",
        line: 13
      },
      name: "OutlineTree",
      definition: {
        location: {
          type: "source",
          fileName: "rpc-types.js",
          line: 13
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 14
          },
          name: "icon",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 14
            },
            kind: "string"
          },
          optional: true
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 17
          },
          name: "plainText",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 17
            },
            kind: "string"
          },
          optional: true
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 18
          },
          name: "tokenizedText",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 18
            },
            kind: "named",
            name: "TokenizedText"
          },
          optional: true
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 19
          },
          name: "representativeName",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 19
            },
            kind: "string"
          },
          optional: true
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 21
          },
          name: "startPosition",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 21
            },
            kind: "named",
            name: "atom$Point"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 22
          },
          name: "endPosition",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 22
            },
            kind: "named",
            name: "atom$Point"
          },
          optional: true
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 23
          },
          name: "children",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 23
            },
            kind: "array",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 23
              },
              kind: "named",
              name: "OutlineTree"
            }
          },
          optional: false
        }]
      }
    },
    Outline: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "rpc-types.js",
        line: 26
      },
      name: "Outline",
      definition: {
        location: {
          type: "source",
          fileName: "rpc-types.js",
          line: 26
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 27
          },
          name: "outlineTrees",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 27
            },
            kind: "array",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 27
              },
              kind: "named",
              name: "OutlineTree"
            }
          },
          optional: false
        }]
      }
    },
    TokenKind: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "tokenizedText-rpc-types.js",
        line: 13
      },
      name: "TokenKind",
      definition: {
        location: {
          type: "source",
          fileName: "tokenizedText-rpc-types.js",
          line: 13
        },
        kind: "union",
        types: [{
          location: {
            type: "source",
            fileName: "tokenizedText-rpc-types.js",
            line: 13
          },
          kind: "string-literal",
          value: "keyword"
        }, {
          location: {
            type: "source",
            fileName: "tokenizedText-rpc-types.js",
            line: 14
          },
          kind: "string-literal",
          value: "class-name"
        }, {
          location: {
            type: "source",
            fileName: "tokenizedText-rpc-types.js",
            line: 15
          },
          kind: "string-literal",
          value: "constructor"
        }, {
          location: {
            type: "source",
            fileName: "tokenizedText-rpc-types.js",
            line: 16
          },
          kind: "string-literal",
          value: "method"
        }, {
          location: {
            type: "source",
            fileName: "tokenizedText-rpc-types.js",
            line: 17
          },
          kind: "string-literal",
          value: "param"
        }, {
          location: {
            type: "source",
            fileName: "tokenizedText-rpc-types.js",
            line: 18
          },
          kind: "string-literal",
          value: "string"
        }, {
          location: {
            type: "source",
            fileName: "tokenizedText-rpc-types.js",
            line: 19
          },
          kind: "string-literal",
          value: "whitespace"
        }, {
          location: {
            type: "source",
            fileName: "tokenizedText-rpc-types.js",
            line: 20
          },
          kind: "string-literal",
          value: "plain"
        }, {
          location: {
            type: "source",
            fileName: "tokenizedText-rpc-types.js",
            line: 21
          },
          kind: "string-literal",
          value: "type"
        }]
      }
    },
    TextToken: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "tokenizedText-rpc-types.js",
        line: 24
      },
      name: "TextToken",
      definition: {
        location: {
          type: "source",
          fileName: "tokenizedText-rpc-types.js",
          line: 24
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "tokenizedText-rpc-types.js",
            line: 25
          },
          name: "kind",
          type: {
            location: {
              type: "source",
              fileName: "tokenizedText-rpc-types.js",
              line: 25
            },
            kind: "named",
            name: "TokenKind"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "tokenizedText-rpc-types.js",
            line: 26
          },
          name: "value",
          type: {
            location: {
              type: "source",
              fileName: "tokenizedText-rpc-types.js",
              line: 26
            },
            kind: "string"
          },
          optional: false
        }]
      }
    },
    TokenizedText: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "tokenizedText-rpc-types.js",
        line: 29
      },
      name: "TokenizedText",
      definition: {
        location: {
          type: "source",
          fileName: "tokenizedText-rpc-types.js",
          line: 29
        },
        kind: "array",
        type: {
          location: {
            type: "source",
            fileName: "tokenizedText-rpc-types.js",
            line: 29
          },
          kind: "named",
          name: "TextToken"
        }
      }
    },
    UncoveredRegion: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "rpc-types.js",
        line: 11
      },
      name: "UncoveredRegion",
      definition: {
        location: {
          type: "source",
          fileName: "rpc-types.js",
          line: 11
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 12
          },
          name: "range",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 12
            },
            kind: "named",
            name: "atom$Range"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 13
          },
          name: "message",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 13
            },
            kind: "string"
          },
          optional: true
        }]
      }
    },
    CoverageResult: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "rpc-types.js",
        line: 16
      },
      name: "CoverageResult",
      definition: {
        location: {
          type: "source",
          fileName: "rpc-types.js",
          line: 16
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 17
          },
          name: "percentage",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 17
            },
            kind: "number"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 18
          },
          name: "uncoveredRegions",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 18
            },
            kind: "array",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 18
              },
              kind: "named",
              name: "UncoveredRegion"
            }
          },
          optional: false
        }]
      }
    },
    Reference: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "rpc-types.js",
        line: 13
      },
      name: "Reference",
      definition: {
        location: {
          type: "source",
          fileName: "rpc-types.js",
          line: 13
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 14
          },
          name: "uri",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 14
            },
            kind: "named",
            name: "NuclideUri"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 15
          },
          name: "name",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 15
            },
            kind: "nullable",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 15
              },
              kind: "string"
            }
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 16
          },
          name: "range",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 16
            },
            kind: "named",
            name: "atom$Range"
          },
          optional: false
        }]
      }
    },
    FindReferencesData: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "rpc-types.js",
        line: 19
      },
      name: "FindReferencesData",
      definition: {
        location: {
          type: "source",
          fileName: "rpc-types.js",
          line: 19
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 20
          },
          name: "type",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 20
            },
            kind: "string-literal",
            value: "data"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 21
          },
          name: "baseUri",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 21
            },
            kind: "named",
            name: "NuclideUri"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 22
          },
          name: "referencedSymbolName",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 22
            },
            kind: "string"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 23
          },
          name: "references",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 23
            },
            kind: "array",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 23
              },
              kind: "named",
              name: "Reference"
            }
          },
          optional: false
        }]
      }
    },
    FindReferencesError: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "rpc-types.js",
        line: 26
      },
      name: "FindReferencesError",
      definition: {
        location: {
          type: "source",
          fileName: "rpc-types.js",
          line: 26
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 27
          },
          name: "type",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 27
            },
            kind: "string-literal",
            value: "error"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 28
          },
          name: "message",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 28
            },
            kind: "string"
          },
          optional: false
        }]
      }
    },
    FindReferencesReturn: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "rpc-types.js",
        line: 31
      },
      name: "FindReferencesReturn",
      definition: {
        location: {
          type: "source",
          fileName: "rpc-types.js",
          line: 31
        },
        kind: "union",
        types: [{
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 19
          },
          kind: "object",
          fields: [{
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 20
            },
            name: "type",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 20
              },
              kind: "string-literal",
              value: "data"
            },
            optional: false
          }, {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 21
            },
            name: "baseUri",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 21
              },
              kind: "named",
              name: "NuclideUri"
            },
            optional: false
          }, {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 22
            },
            name: "referencedSymbolName",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 22
              },
              kind: "string"
            },
            optional: false
          }, {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 23
            },
            name: "references",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 23
              },
              kind: "array",
              type: {
                location: {
                  type: "source",
                  fileName: "rpc-types.js",
                  line: 23
                },
                kind: "named",
                name: "Reference"
              }
            },
            optional: false
          }]
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 26
          },
          kind: "object",
          fields: [{
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 27
            },
            name: "type",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 27
              },
              kind: "string-literal",
              value: "error"
            },
            optional: false
          }, {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 28
            },
            name: "message",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 28
              },
              kind: "string"
            },
            optional: false
          }]
        }],
        discriminantField: "type"
      }
    },
    Definition: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "rpc-types.js",
        line: 23
      },
      name: "Definition",
      definition: {
        location: {
          type: "source",
          fileName: "rpc-types.js",
          line: 23
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 24
          },
          name: "path",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 24
            },
            kind: "named",
            name: "NuclideUri"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 25
          },
          name: "position",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 25
            },
            kind: "named",
            name: "atom$Point"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 26
          },
          name: "range",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 26
            },
            kind: "named",
            name: "atom$Range"
          },
          optional: true
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 27
          },
          name: "id",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 27
            },
            kind: "string"
          },
          optional: true
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 28
          },
          name: "name",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 28
            },
            kind: "string"
          },
          optional: true
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 29
          },
          name: "language",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 29
            },
            kind: "string"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 30
          },
          name: "projectRoot",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 30
            },
            kind: "named",
            name: "NuclideUri"
          },
          optional: true
        }]
      }
    },
    DefinitionQueryResult: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "rpc-types.js",
        line: 36
      },
      name: "DefinitionQueryResult",
      definition: {
        location: {
          type: "source",
          fileName: "rpc-types.js",
          line: 36
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 37
          },
          name: "queryRange",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 37
            },
            kind: "array",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 37
              },
              kind: "named",
              name: "atom$Range"
            }
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 38
          },
          name: "definitions",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 38
            },
            kind: "array",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 38
              },
              kind: "named",
              name: "Definition"
            }
          },
          optional: false
        }]
      }
    },
    Completion: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "LanguageService.js",
        line: 31
      },
      name: "Completion",
      definition: {
        location: {
          type: "source",
          fileName: "LanguageService.js",
          line: 31
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 32
          },
          name: "text",
          type: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 32
            },
            kind: "string"
          },
          optional: true
        }, {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 33
          },
          name: "snippet",
          type: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 33
            },
            kind: "string"
          },
          optional: true
        }, {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 34
          },
          name: "displayText",
          type: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 34
            },
            kind: "string"
          },
          optional: true
        }, {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 35
          },
          name: "replacementPrefix",
          type: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 35
            },
            kind: "string"
          },
          optional: true
        }, {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 36
          },
          name: "type",
          type: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 36
            },
            kind: "nullable",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 36
              },
              kind: "string"
            }
          },
          optional: true
        }, {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 37
          },
          name: "leftLabel",
          type: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 37
            },
            kind: "nullable",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 37
              },
              kind: "string"
            }
          },
          optional: true
        }, {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 38
          },
          name: "leftLabelHTML",
          type: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 38
            },
            kind: "nullable",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 38
              },
              kind: "string"
            }
          },
          optional: true
        }, {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 39
          },
          name: "rightLabel",
          type: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 39
            },
            kind: "nullable",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 39
              },
              kind: "string"
            }
          },
          optional: true
        }, {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 40
          },
          name: "rightLabelHTML",
          type: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 40
            },
            kind: "nullable",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 40
              },
              kind: "string"
            }
          },
          optional: true
        }, {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 41
          },
          name: "className",
          type: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 41
            },
            kind: "nullable",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 41
              },
              kind: "string"
            }
          },
          optional: true
        }, {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 42
          },
          name: "iconHTML",
          type: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 42
            },
            kind: "nullable",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 42
              },
              kind: "string"
            }
          },
          optional: true
        }, {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 43
          },
          name: "description",
          type: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 43
            },
            kind: "nullable",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 43
              },
              kind: "string"
            }
          },
          optional: true
        }, {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 44
          },
          name: "descriptionMoreURL",
          type: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 44
            },
            kind: "nullable",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 44
              },
              kind: "string"
            }
          },
          optional: true
        }, {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 45
          },
          name: "extraData",
          type: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 45
            },
            kind: "mixed"
          },
          optional: true
        }]
      }
    },
    AutocompleteResult: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "LanguageService.js",
        line: 52
      },
      name: "AutocompleteResult",
      definition: {
        location: {
          type: "source",
          fileName: "LanguageService.js",
          line: 52
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 53
          },
          name: "isIncomplete",
          type: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 53
            },
            kind: "boolean"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 54
          },
          name: "items",
          type: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 54
            },
            kind: "array",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 54
              },
              kind: "named",
              name: "Completion"
            }
          },
          optional: false
        }]
      }
    },
    SymbolResult: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "LanguageService.js",
        line: 57
      },
      name: "SymbolResult",
      definition: {
        location: {
          type: "source",
          fileName: "LanguageService.js",
          line: 57
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 58
          },
          name: "path",
          type: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 58
            },
            kind: "named",
            name: "NuclideUri"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 59
          },
          name: "line",
          type: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 59
            },
            kind: "number"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 60
          },
          name: "column",
          type: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 60
            },
            kind: "number"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 61
          },
          name: "name",
          type: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 61
            },
            kind: "string"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 62
          },
          name: "containerName",
          type: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 62
            },
            kind: "nullable",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 62
              },
              kind: "string"
            }
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 63
          },
          name: "icon",
          type: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 63
            },
            kind: "nullable",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 63
              },
              kind: "string"
            }
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 64
          },
          name: "hoverText",
          type: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 64
            },
            kind: "nullable",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 64
              },
              kind: "string"
            }
          },
          optional: false
        }]
      }
    },
    LanguageService: {
      kind: "interface",
      name: "LanguageService",
      location: {
        type: "source",
        fileName: "LanguageService.js",
        line: 67
      },
      constructorArgs: null,
      staticMethods: {},
      instanceMethods: {
        getDiagnostics: {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 69
          },
          kind: "function",
          argumentTypes: [{
            name: "fileVersion",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 70
              },
              kind: "named",
              name: "FileVersion"
            }
          }],
          returnType: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 71
            },
            kind: "promise",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 71
              },
              kind: "nullable",
              type: {
                location: {
                  type: "source",
                  fileName: "LanguageService.js",
                  line: 71
                },
                kind: "named",
                name: "DiagnosticProviderUpdate"
              }
            }
          }
        },
        observeDiagnostics: {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 73
          },
          kind: "function",
          argumentTypes: [],
          returnType: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 73
            },
            kind: "observable",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 73
              },
              kind: "named",
              name: "FileDiagnosticUpdate"
            }
          }
        },
        getAutocompleteSuggestions: {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 75
          },
          kind: "function",
          argumentTypes: [{
            name: "fileVersion",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 76
              },
              kind: "named",
              name: "FileVersion"
            }
          }, {
            name: "position",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 77
              },
              kind: "named",
              name: "atom$Point"
            }
          }, {
            name: "activatedManually",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 78
              },
              kind: "boolean"
            }
          }, {
            name: "prefix",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 79
              },
              kind: "string"
            }
          }],
          returnType: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 80
            },
            kind: "promise",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 80
              },
              kind: "nullable",
              type: {
                location: {
                  type: "source",
                  fileName: "LanguageService.js",
                  line: 80
                },
                kind: "named",
                name: "AutocompleteResult"
              }
            }
          }
        },
        getDefinition: {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 82
          },
          kind: "function",
          argumentTypes: [{
            name: "fileVersion",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 83
              },
              kind: "named",
              name: "FileVersion"
            }
          }, {
            name: "position",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 84
              },
              kind: "named",
              name: "atom$Point"
            }
          }],
          returnType: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 85
            },
            kind: "promise",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 85
              },
              kind: "nullable",
              type: {
                location: {
                  type: "source",
                  fileName: "LanguageService.js",
                  line: 85
                },
                kind: "named",
                name: "DefinitionQueryResult"
              }
            }
          }
        },
        getDefinitionById: {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 87
          },
          kind: "function",
          argumentTypes: [{
            name: "file",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 88
              },
              kind: "named",
              name: "NuclideUri"
            }
          }, {
            name: "id",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 89
              },
              kind: "string"
            }
          }],
          returnType: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 90
            },
            kind: "promise",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 90
              },
              kind: "nullable",
              type: {
                location: {
                  type: "source",
                  fileName: "LanguageService.js",
                  line: 90
                },
                kind: "named",
                name: "Definition"
              }
            }
          }
        },
        findReferences: {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 92
          },
          kind: "function",
          argumentTypes: [{
            name: "fileVersion",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 93
              },
              kind: "named",
              name: "FileVersion"
            }
          }, {
            name: "position",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 94
              },
              kind: "named",
              name: "atom$Point"
            }
          }],
          returnType: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 95
            },
            kind: "promise",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 95
              },
              kind: "nullable",
              type: {
                location: {
                  type: "source",
                  fileName: "LanguageService.js",
                  line: 95
                },
                kind: "named",
                name: "FindReferencesReturn"
              }
            }
          }
        },
        getCoverage: {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 97
          },
          kind: "function",
          argumentTypes: [{
            name: "filePath",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 98
              },
              kind: "named",
              name: "NuclideUri"
            }
          }],
          returnType: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 99
            },
            kind: "promise",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 99
              },
              kind: "nullable",
              type: {
                location: {
                  type: "source",
                  fileName: "LanguageService.js",
                  line: 99
                },
                kind: "named",
                name: "CoverageResult"
              }
            }
          }
        },
        getOutline: {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 101
          },
          kind: "function",
          argumentTypes: [{
            name: "fileVersion",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 102
              },
              kind: "named",
              name: "FileVersion"
            }
          }],
          returnType: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 103
            },
            kind: "promise",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 103
              },
              kind: "nullable",
              type: {
                location: {
                  type: "source",
                  fileName: "LanguageService.js",
                  line: 103
                },
                kind: "named",
                name: "Outline"
              }
            }
          }
        },
        typeHint: {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 105
          },
          kind: "function",
          argumentTypes: [{
            name: "fileVersion",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 105
              },
              kind: "named",
              name: "FileVersion"
            }
          }, {
            name: "position",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 105
              },
              kind: "named",
              name: "atom$Point"
            }
          }],
          returnType: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 105
            },
            kind: "promise",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 105
              },
              kind: "nullable",
              type: {
                location: {
                  type: "source",
                  fileName: "LanguageService.js",
                  line: 105
                },
                kind: "named",
                name: "TypeHint"
              }
            }
          }
        },
        highlight: {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 107
          },
          kind: "function",
          argumentTypes: [{
            name: "fileVersion",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 108
              },
              kind: "named",
              name: "FileVersion"
            }
          }, {
            name: "position",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 109
              },
              kind: "named",
              name: "atom$Point"
            }
          }],
          returnType: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 110
            },
            kind: "promise",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 110
              },
              kind: "nullable",
              type: {
                location: {
                  type: "source",
                  fileName: "LanguageService.js",
                  line: 110
                },
                kind: "array",
                type: {
                  location: {
                    type: "source",
                    fileName: "LanguageService.js",
                    line: 110
                  },
                  kind: "named",
                  name: "atom$Range"
                }
              }
            }
          }
        },
        formatSource: {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 112
          },
          kind: "function",
          argumentTypes: [{
            name: "fileVersion",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 113
              },
              kind: "named",
              name: "FileVersion"
            }
          }, {
            name: "range",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 114
              },
              kind: "named",
              name: "atom$Range"
            }
          }],
          returnType: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 115
            },
            kind: "promise",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 115
              },
              kind: "nullable",
              type: {
                location: {
                  type: "source",
                  fileName: "LanguageService.js",
                  line: 115
                },
                kind: "array",
                type: {
                  location: {
                    type: "source",
                    fileName: "LanguageService.js",
                    line: 115
                  },
                  kind: "named",
                  name: "TextEdit"
                }
              }
            }
          }
        },
        formatEntireFile: {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 117
          },
          kind: "function",
          argumentTypes: [{
            name: "fileVersion",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 117
              },
              kind: "named",
              name: "FileVersion"
            }
          }, {
            name: "range",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 117
              },
              kind: "named",
              name: "atom$Range"
            }
          }],
          returnType: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 117
            },
            kind: "promise",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 117
              },
              kind: "nullable",
              type: {
                location: {
                  type: "source",
                  fileName: "LanguageService.js",
                  line: 117
                },
                kind: "object",
                fields: [{
                  location: {
                    type: "source",
                    fileName: "LanguageService.js",
                    line: 118
                  },
                  name: "newCursor",
                  type: {
                    location: {
                      type: "source",
                      fileName: "LanguageService.js",
                      line: 118
                    },
                    kind: "number"
                  },
                  optional: true
                }, {
                  location: {
                    type: "source",
                    fileName: "LanguageService.js",
                    line: 119
                  },
                  name: "formatted",
                  type: {
                    location: {
                      type: "source",
                      fileName: "LanguageService.js",
                      line: 119
                    },
                    kind: "string"
                  },
                  optional: false
                }]
              }
            }
          }
        },
        getEvaluationExpression: {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 122
          },
          kind: "function",
          argumentTypes: [{
            name: "fileVersion",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 123
              },
              kind: "named",
              name: "FileVersion"
            }
          }, {
            name: "position",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 124
              },
              kind: "named",
              name: "atom$Point"
            }
          }],
          returnType: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 125
            },
            kind: "promise",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 125
              },
              kind: "nullable",
              type: {
                location: {
                  type: "source",
                  fileName: "LanguageService.js",
                  line: 125
                },
                kind: "named",
                name: "NuclideEvaluationExpression"
              }
            }
          }
        },
        supportsSymbolSearch: {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 127
          },
          kind: "function",
          argumentTypes: [{
            name: "directories",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 128
              },
              kind: "array",
              type: {
                location: {
                  type: "source",
                  fileName: "LanguageService.js",
                  line: 128
                },
                kind: "named",
                name: "NuclideUri"
              }
            }
          }],
          returnType: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 129
            },
            kind: "promise",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 129
              },
              kind: "boolean"
            }
          }
        },
        symbolSearch: {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 131
          },
          kind: "function",
          argumentTypes: [{
            name: "query",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 132
              },
              kind: "string"
            }
          }, {
            name: "directories",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 133
              },
              kind: "array",
              type: {
                location: {
                  type: "source",
                  fileName: "LanguageService.js",
                  line: 133
                },
                kind: "named",
                name: "NuclideUri"
              }
            }
          }],
          returnType: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 134
            },
            kind: "promise",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 134
              },
              kind: "nullable",
              type: {
                location: {
                  type: "source",
                  fileName: "LanguageService.js",
                  line: 134
                },
                kind: "array",
                type: {
                  location: {
                    type: "source",
                    fileName: "LanguageService.js",
                    line: 134
                  },
                  kind: "named",
                  name: "SymbolResult"
                }
              }
            }
          }
        },
        getProjectRoot: {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 136
          },
          kind: "function",
          argumentTypes: [{
            name: "fileUri",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 136
              },
              kind: "named",
              name: "NuclideUri"
            }
          }],
          returnType: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 136
            },
            kind: "promise",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 136
              },
              kind: "nullable",
              type: {
                location: {
                  type: "source",
                  fileName: "LanguageService.js",
                  line: 136
                },
                kind: "named",
                name: "NuclideUri"
              }
            }
          }
        },
        isFileInProject: {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 138
          },
          kind: "function",
          argumentTypes: [{
            name: "fileUri",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 138
              },
              kind: "named",
              name: "NuclideUri"
            }
          }],
          returnType: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 138
            },
            kind: "promise",
            type: {
              location: {
                type: "source",
                fileName: "LanguageService.js",
                line: 138
              },
              kind: "boolean"
            }
          }
        },
        dispose: {
          location: {
            type: "source",
            fileName: "LanguageService.js",
            line: 140
          },
          kind: "function",
          argumentTypes: [],
          returnType: {
            location: {
              type: "source",
              fileName: "LanguageService.js",
              line: 140
            },
            kind: "void"
          }
        }
      }
    },
    InvalidationMessage: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "rpc-types.js",
        line: 15
      },
      name: "InvalidationMessage",
      definition: {
        location: {
          type: "source",
          fileName: "rpc-types.js",
          line: 15
        },
        kind: "union",
        types: [{
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 15
          },
          kind: "object",
          fields: [{
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 16
            },
            name: "scope",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 16
              },
              kind: "string-literal",
              value: "file"
            },
            optional: false
          }, {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 17
            },
            name: "filePaths",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 17
              },
              kind: "array",
              type: {
                location: {
                  type: "source",
                  fileName: "rpc-types.js",
                  line: 17
                },
                kind: "named",
                name: "NuclideUri"
              }
            },
            optional: false
          }]
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 18
          },
          kind: "object",
          fields: [{
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 19
            },
            name: "scope",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 19
              },
              kind: "string-literal",
              value: "project"
            },
            optional: false
          }]
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 20
          },
          kind: "object",
          fields: [{
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 21
            },
            name: "scope",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 21
              },
              kind: "string-literal",
              value: "all"
            },
            optional: false
          }]
        }],
        discriminantField: "scope"
      }
    },
    DiagnosticProviderUpdate: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "rpc-types.js",
        line: 31
      },
      name: "DiagnosticProviderUpdate",
      definition: {
        location: {
          type: "source",
          fileName: "rpc-types.js",
          line: 31
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 32
          },
          name: "filePathToMessages",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 32
            },
            kind: "map",
            keyType: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 32
              },
              kind: "named",
              name: "NuclideUri"
            },
            valueType: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 32
              },
              kind: "array",
              type: {
                location: {
                  type: "source",
                  fileName: "rpc-types.js",
                  line: 32
                },
                kind: "named",
                name: "FileDiagnosticMessage"
              }
            }
          },
          optional: true
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 33
          },
          name: "projectMessages",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 33
            },
            kind: "array",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 33
              },
              kind: "named",
              name: "ProjectDiagnosticMessage"
            }
          },
          optional: true
        }]
      }
    },
    FileDiagnosticUpdate: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "rpc-types.js",
        line: 36
      },
      name: "FileDiagnosticUpdate",
      definition: {
        location: {
          type: "source",
          fileName: "rpc-types.js",
          line: 36
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 37
          },
          name: "filePath",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 37
            },
            kind: "named",
            name: "NuclideUri"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 38
          },
          name: "messages",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 38
            },
            kind: "array",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 38
              },
              kind: "named",
              name: "FileDiagnosticMessage"
            }
          },
          optional: false
        }]
      }
    },
    MessageType: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "rpc-types.js",
        line: 41
      },
      name: "MessageType",
      definition: {
        location: {
          type: "source",
          fileName: "rpc-types.js",
          line: 41
        },
        kind: "union",
        types: [{
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 41
          },
          kind: "string-literal",
          value: "Error"
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 41
          },
          kind: "string-literal",
          value: "Warning"
        }]
      }
    },
    Trace: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "rpc-types.js",
        line: 43
      },
      name: "Trace",
      definition: {
        location: {
          type: "source",
          fileName: "rpc-types.js",
          line: 43
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 44
          },
          name: "type",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 44
            },
            kind: "string-literal",
            value: "Trace"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 45
          },
          name: "text",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 45
            },
            kind: "string"
          },
          optional: true
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 46
          },
          name: "html",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 46
            },
            kind: "string"
          },
          optional: true
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 47
          },
          name: "filePath",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 47
            },
            kind: "named",
            name: "NuclideUri"
          },
          optional: true
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 48
          },
          name: "range",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 48
            },
            kind: "named",
            name: "atom$Range"
          },
          optional: true
        }]
      }
    },
    Fix: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "rpc-types.js",
        line: 51
      },
      name: "Fix",
      definition: {
        location: {
          type: "source",
          fileName: "rpc-types.js",
          line: 51
        },
        kind: "intersection",
        types: [{
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 51
          },
          kind: "named",
          name: "TextEdit"
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 51
          },
          kind: "object",
          fields: [{
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 55
            },
            name: "speculative",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 55
              },
              kind: "boolean"
            },
            optional: true
          }]
        }],
        flattened: {
          kind: "object",
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 51
          },
          fields: [{
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 12
            },
            name: "oldRange",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 12
              },
              kind: "named",
              name: "atom$Range"
            },
            optional: false
          }, {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 13
            },
            name: "newText",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 13
              },
              kind: "string"
            },
            optional: false
          }, {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 15
            },
            name: "oldText",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 15
              },
              kind: "string"
            },
            optional: true
          }, {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 55
            },
            name: "speculative",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 55
              },
              kind: "boolean"
            },
            optional: true
          }]
        }
      }
    },
    FileDiagnosticMessage: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "rpc-types.js",
        line: 58
      },
      name: "FileDiagnosticMessage",
      definition: {
        location: {
          type: "source",
          fileName: "rpc-types.js",
          line: 58
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 59
          },
          name: "scope",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 59
            },
            kind: "string-literal",
            value: "file"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 60
          },
          name: "providerName",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 60
            },
            kind: "string"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 61
          },
          name: "type",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 61
            },
            kind: "named",
            name: "MessageType"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 62
          },
          name: "filePath",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 62
            },
            kind: "named",
            name: "NuclideUri"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 63
          },
          name: "text",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 63
            },
            kind: "string"
          },
          optional: true
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 64
          },
          name: "html",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 64
            },
            kind: "string"
          },
          optional: true
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 65
          },
          name: "range",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 65
            },
            kind: "named",
            name: "atom$Range"
          },
          optional: true
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 66
          },
          name: "trace",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 66
            },
            kind: "array",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 66
              },
              kind: "named",
              name: "Trace"
            }
          },
          optional: true
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 67
          },
          name: "fix",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 67
            },
            kind: "named",
            name: "Fix"
          },
          optional: true
        }]
      }
    },
    ProjectDiagnosticMessage: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "rpc-types.js",
        line: 70
      },
      name: "ProjectDiagnosticMessage",
      definition: {
        location: {
          type: "source",
          fileName: "rpc-types.js",
          line: 70
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 71
          },
          name: "scope",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 71
            },
            kind: "string-literal",
            value: "project"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 72
          },
          name: "providerName",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 72
            },
            kind: "string"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 73
          },
          name: "type",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 73
            },
            kind: "named",
            name: "MessageType"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 74
          },
          name: "text",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 74
            },
            kind: "string"
          },
          optional: true
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 75
          },
          name: "html",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 75
            },
            kind: "string"
          },
          optional: true
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 76
          },
          name: "range",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 76
            },
            kind: "named",
            name: "atom$Range"
          },
          optional: true
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 77
          },
          name: "trace",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 77
            },
            kind: "array",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 77
              },
              kind: "named",
              name: "Trace"
            }
          },
          optional: true
        }]
      }
    },
    FileOpenEvent: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "rpc-types.js",
        line: 14
      },
      name: "FileOpenEvent",
      definition: {
        location: {
          type: "source",
          fileName: "rpc-types.js",
          line: 14
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 15
          },
          name: "kind",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 15
            },
            kind: "string-literal",
            value: "open"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 16
          },
          name: "fileVersion",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 16
            },
            kind: "named",
            name: "FileVersion"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 17
          },
          name: "contents",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 17
            },
            kind: "string"
          },
          optional: false
        }]
      }
    },
    FileSyncEvent: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "rpc-types.js",
        line: 21
      },
      name: "FileSyncEvent",
      definition: {
        location: {
          type: "source",
          fileName: "rpc-types.js",
          line: 21
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 22
          },
          name: "kind",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 22
            },
            kind: "string-literal",
            value: "sync"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 23
          },
          name: "fileVersion",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 23
            },
            kind: "named",
            name: "FileVersion"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 24
          },
          name: "contents",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 24
            },
            kind: "string"
          },
          optional: false
        }]
      }
    },
    FileCloseEvent: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "rpc-types.js",
        line: 27
      },
      name: "FileCloseEvent",
      definition: {
        location: {
          type: "source",
          fileName: "rpc-types.js",
          line: 27
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 28
          },
          name: "kind",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 28
            },
            kind: "string-literal",
            value: "close"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 29
          },
          name: "fileVersion",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 29
            },
            kind: "named",
            name: "FileVersion"
          },
          optional: false
        }]
      }
    },
    FileEditEvent: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "rpc-types.js",
        line: 32
      },
      name: "FileEditEvent",
      definition: {
        location: {
          type: "source",
          fileName: "rpc-types.js",
          line: 32
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 33
          },
          name: "kind",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 33
            },
            kind: "string-literal",
            value: "edit"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 34
          },
          name: "fileVersion",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 34
            },
            kind: "named",
            name: "FileVersion"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 35
          },
          name: "oldRange",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 35
            },
            kind: "named",
            name: "atom$Range"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 36
          },
          name: "newRange",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 36
            },
            kind: "named",
            name: "atom$Range"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 37
          },
          name: "oldText",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 37
            },
            kind: "string"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 38
          },
          name: "newText",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 38
            },
            kind: "string"
          },
          optional: false
        }]
      }
    },
    FileEvent: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "rpc-types.js",
        line: 42
      },
      name: "FileEvent",
      definition: {
        location: {
          type: "source",
          fileName: "rpc-types.js",
          line: 42
        },
        kind: "union",
        types: [{
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 14
          },
          kind: "object",
          fields: [{
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 15
            },
            name: "kind",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 15
              },
              kind: "string-literal",
              value: "open"
            },
            optional: false
          }, {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 16
            },
            name: "fileVersion",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 16
              },
              kind: "named",
              name: "FileVersion"
            },
            optional: false
          }, {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 17
            },
            name: "contents",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 17
              },
              kind: "string"
            },
            optional: false
          }]
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 27
          },
          kind: "object",
          fields: [{
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 28
            },
            name: "kind",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 28
              },
              kind: "string-literal",
              value: "close"
            },
            optional: false
          }, {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 29
            },
            name: "fileVersion",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 29
              },
              kind: "named",
              name: "FileVersion"
            },
            optional: false
          }]
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 32
          },
          kind: "object",
          fields: [{
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 33
            },
            name: "kind",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 33
              },
              kind: "string-literal",
              value: "edit"
            },
            optional: false
          }, {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 34
            },
            name: "fileVersion",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 34
              },
              kind: "named",
              name: "FileVersion"
            },
            optional: false
          }, {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 35
            },
            name: "oldRange",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 35
              },
              kind: "named",
              name: "atom$Range"
            },
            optional: false
          }, {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 36
            },
            name: "newRange",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 36
              },
              kind: "named",
              name: "atom$Range"
            },
            optional: false
          }, {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 37
            },
            name: "oldText",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 37
              },
              kind: "string"
            },
            optional: false
          }, {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 38
            },
            name: "newText",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 38
              },
              kind: "string"
            },
            optional: false
          }]
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 21
          },
          kind: "object",
          fields: [{
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 22
            },
            name: "kind",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 22
              },
              kind: "string-literal",
              value: "sync"
            },
            optional: false
          }, {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 23
            },
            name: "fileVersion",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 23
              },
              kind: "named",
              name: "FileVersion"
            },
            optional: false
          }, {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 24
            },
            name: "contents",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 24
              },
              kind: "string"
            },
            optional: false
          }]
        }],
        discriminantField: "kind"
      }
    },
    LocalFileEvent: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "rpc-types.js",
        line: 44
      },
      name: "LocalFileEvent",
      definition: {
        location: {
          type: "source",
          fileName: "rpc-types.js",
          line: 44
        },
        kind: "union",
        types: [{
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 14
          },
          kind: "object",
          fields: [{
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 15
            },
            name: "kind",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 15
              },
              kind: "string-literal",
              value: "open"
            },
            optional: false
          }, {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 16
            },
            name: "fileVersion",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 16
              },
              kind: "named",
              name: "FileVersion"
            },
            optional: false
          }, {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 17
            },
            name: "contents",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 17
              },
              kind: "string"
            },
            optional: false
          }]
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 27
          },
          kind: "object",
          fields: [{
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 28
            },
            name: "kind",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 28
              },
              kind: "string-literal",
              value: "close"
            },
            optional: false
          }, {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 29
            },
            name: "fileVersion",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 29
              },
              kind: "named",
              name: "FileVersion"
            },
            optional: false
          }]
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 32
          },
          kind: "object",
          fields: [{
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 33
            },
            name: "kind",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 33
              },
              kind: "string-literal",
              value: "edit"
            },
            optional: false
          }, {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 34
            },
            name: "fileVersion",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 34
              },
              kind: "named",
              name: "FileVersion"
            },
            optional: false
          }, {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 35
            },
            name: "oldRange",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 35
              },
              kind: "named",
              name: "atom$Range"
            },
            optional: false
          }, {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 36
            },
            name: "newRange",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 36
              },
              kind: "named",
              name: "atom$Range"
            },
            optional: false
          }, {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 37
            },
            name: "oldText",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 37
              },
              kind: "string"
            },
            optional: false
          }, {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 38
            },
            name: "newText",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 38
              },
              kind: "string"
            },
            optional: false
          }]
        }],
        discriminantField: "kind"
      }
    },
    FileNotifier: {
      kind: "interface",
      name: "FileNotifier",
      location: {
        type: "source",
        fileName: "rpc-types.js",
        line: 46
      },
      constructorArgs: null,
      staticMethods: {},
      instanceMethods: {
        onFileEvent: {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 47
          },
          kind: "function",
          argumentTypes: [{
            name: "event",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 47
              },
              kind: "named",
              name: "FileEvent"
            }
          }],
          returnType: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 47
            },
            kind: "promise",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 47
              },
              kind: "void"
            }
          }
        },
        onDirectoriesChanged: {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 48
          },
          kind: "function",
          argumentTypes: [{
            name: "openDirectories",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 48
              },
              kind: "set",
              type: {
                location: {
                  type: "source",
                  fileName: "rpc-types.js",
                  line: 48
                },
                kind: "named",
                name: "NuclideUri"
              }
            }
          }],
          returnType: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 48
            },
            kind: "promise",
            type: {
              location: {
                type: "source",
                fileName: "rpc-types.js",
                line: 48
              },
              kind: "void"
            }
          }
        },
        dispose: {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 49
          },
          kind: "function",
          argumentTypes: [],
          returnType: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 49
            },
            kind: "void"
          }
        }
      }
    },
    FileVersion: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "rpc-types.js",
        line: 52
      },
      name: "FileVersion",
      definition: {
        location: {
          type: "source",
          fileName: "rpc-types.js",
          line: 52
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 53
          },
          name: "notifier",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 53
            },
            kind: "named",
            name: "FileNotifier"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 54
          },
          name: "filePath",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 54
            },
            kind: "named",
            name: "NuclideUri"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "rpc-types.js",
            line: 55
          },
          name: "version",
          type: {
            location: {
              type: "source",
              fileName: "rpc-types.js",
              line: 55
            },
            kind: "number"
          },
          optional: false
        }]
      }
    }
  }
});