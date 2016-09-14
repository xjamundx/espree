module.exports = {
    "type": "Program",
    "start": 0,
    "end": 59,
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 1,
            "column": 59
        }
    },
    "range": [
        0,
        59
    ],
    "body": [
        {
            "type": "FunctionDeclaration",
            "start": 0,
            "end": 58,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 58
                }
            },
            "range": [
                0,
                58
            ],
            "id": {
                "type": "Identifier",
                "start": 15,
                "end": 18,
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 15
                    },
                    "end": {
                        "line": 1,
                        "column": 18
                    }
                },
                "range": [
                    15,
                    18
                ],
                "name": "foo"
            },
            "generator": false,
            "expression": false,
            "async": true,
            "params": [
                {
                    "type": "AssignmentPattern",
                    "start": 19,
                    "end": 54,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 19
                        },
                        "end": {
                            "line": 1,
                            "column": 54
                        }
                    },
                    "range": [
                        19,
                        54
                    ],
                    "left": {
                        "type": "Identifier",
                        "start": 19,
                        "end": 20,
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 19
                            },
                            "end": {
                                "line": 1,
                                "column": 20
                            }
                        },
                        "range": [
                            19,
                            20
                        ],
                        "name": "a"
                    },
                    "right": {
                        "type": "ClassExpression",
                        "start": 23,
                        "end": 54,
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 23
                            },
                            "end": {
                                "line": 1,
                                "column": 54
                            }
                        },
                        "range": [
                            23,
                            54
                        ],
                        "id": null,
                        "superClass": null,
                        "body": {
                            "type": "ClassBody",
                            "start": 29,
                            "end": 54,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 29
                                },
                                "end": {
                                    "line": 1,
                                    "column": 54
                                }
                            },
                            "range": [
                                29,
                                54
                            ],
                            "body": [
                                {
                                    "type": "MethodDefinition",
                                    "start": 30,
                                    "end": 53,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 30
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 53
                                        }
                                    },
                                    "range": [
                                        30,
                                        53
                                    ],
                                    "computed": false,
                                    "key": {
                                        "type": "Identifier",
                                        "start": 36,
                                        "end": 39,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 36
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 39
                                            }
                                        },
                                        "range": [
                                            36,
                                            39
                                        ],
                                        "name": "bar"
                                    },
                                    "static": false,
                                    "kind": "method",
                                    "value": {
                                        "type": "FunctionExpression",
                                        "start": 39,
                                        "end": 53,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 39
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 53
                                            }
                                        },
                                        "range": [
                                            39,
                                            53
                                        ],
                                        "id": null,
                                        "generator": false,
                                        "expression": false,
                                        "async": true,
                                        "params": [],
                                        "body": {
                                            "type": "BlockStatement",
                                            "start": 42,
                                            "end": 53,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 42
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 53
                                                }
                                            },
                                            "range": [
                                                42,
                                                53
                                            ],
                                            "body": [
                                                {
                                                    "type": "ExpressionStatement",
                                                    "start": 44,
                                                    "end": 51,
                                                    "loc": {
                                                        "start": {
                                                            "line": 1,
                                                            "column": 44
                                                        },
                                                        "end": {
                                                            "line": 1,
                                                            "column": 51
                                                        }
                                                    },
                                                    "range": [
                                                        44,
                                                        51
                                                    ],
                                                    "expression": {
                                                        "type": "AwaitExpression",
                                                        "start": 44,
                                                        "end": 51,
                                                        "loc": {
                                                            "start": {
                                                                "line": 1,
                                                                "column": 44
                                                            },
                                                            "end": {
                                                                "line": 1,
                                                                "column": 51
                                                            }
                                                        },
                                                        "range": [
                                                            44,
                                                            51
                                                        ],
                                                        "argument": {
                                                            "type": "Identifier",
                                                            "start": 50,
                                                            "end": 51,
                                                            "loc": {
                                                                "start": {
                                                                    "line": 1,
                                                                    "column": 50
                                                                },
                                                                "end": {
                                                                    "line": 1,
                                                                    "column": 51
                                                                }
                                                            },
                                                            "range": [
                                                                50,
                                                                51
                                                            ],
                                                            "name": "b"
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                }
                            ]
                        }
                    }
                }
            ],
            "body": {
                "type": "BlockStatement",
                "start": 56,
                "end": 58,
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 56
                    },
                    "end": {
                        "line": 1,
                        "column": 58
                    }
                },
                "range": [
                    56,
                    58
                ],
                "body": []
            }
        },
        {
            "type": "EmptyStatement",
            "start": 58,
            "end": 59,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 58
                },
                "end": {
                    "line": 1,
                    "column": 59
                }
            },
            "range": [
                58,
                59
            ]
        }
    ],
    "sourceType": "script",
    "tokens": [
        {
            "type": "Identifier",
            "value": "async",
            "start": 0,
            "end": 5,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 5
                }
            },
            "range": [
                0,
                5
            ]
        },
        {
            "type": "Keyword",
            "value": "function",
            "start": 6,
            "end": 14,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 6
                },
                "end": {
                    "line": 1,
                    "column": 14
                }
            },
            "range": [
                6,
                14
            ]
        },
        {
            "type": "Identifier",
            "value": "foo",
            "start": 15,
            "end": 18,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 15
                },
                "end": {
                    "line": 1,
                    "column": 18
                }
            },
            "range": [
                15,
                18
            ]
        },
        {
            "type": "Punctuator",
            "value": "(",
            "start": 18,
            "end": 19,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 18
                },
                "end": {
                    "line": 1,
                    "column": 19
                }
            },
            "range": [
                18,
                19
            ]
        },
        {
            "type": "Identifier",
            "value": "a",
            "start": 19,
            "end": 20,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 19
                },
                "end": {
                    "line": 1,
                    "column": 20
                }
            },
            "range": [
                19,
                20
            ]
        },
        {
            "type": "Punctuator",
            "value": "=",
            "start": 21,
            "end": 22,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 21
                },
                "end": {
                    "line": 1,
                    "column": 22
                }
            },
            "range": [
                21,
                22
            ]
        },
        {
            "type": "Keyword",
            "value": "class",
            "start": 23,
            "end": 28,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 23
                },
                "end": {
                    "line": 1,
                    "column": 28
                }
            },
            "range": [
                23,
                28
            ]
        },
        {
            "type": "Punctuator",
            "value": "{",
            "start": 29,
            "end": 30,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 29
                },
                "end": {
                    "line": 1,
                    "column": 30
                }
            },
            "range": [
                29,
                30
            ]
        },
        {
            "type": "Identifier",
            "value": "async",
            "start": 30,
            "end": 35,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 30
                },
                "end": {
                    "line": 1,
                    "column": 35
                }
            },
            "range": [
                30,
                35
            ]
        },
        {
            "type": "Identifier",
            "value": "bar",
            "start": 36,
            "end": 39,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 36
                },
                "end": {
                    "line": 1,
                    "column": 39
                }
            },
            "range": [
                36,
                39
            ]
        },
        {
            "type": "Punctuator",
            "value": "(",
            "start": 39,
            "end": 40,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 39
                },
                "end": {
                    "line": 1,
                    "column": 40
                }
            },
            "range": [
                39,
                40
            ]
        },
        {
            "type": "Punctuator",
            "value": ")",
            "start": 40,
            "end": 41,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 40
                },
                "end": {
                    "line": 1,
                    "column": 41
                }
            },
            "range": [
                40,
                41
            ]
        },
        {
            "type": "Punctuator",
            "value": "{",
            "start": 42,
            "end": 43,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 42
                },
                "end": {
                    "line": 1,
                    "column": 43
                }
            },
            "range": [
                42,
                43
            ]
        },
        {
            "type": "Identifier",
            "value": "await",
            "start": 44,
            "end": 49,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 44
                },
                "end": {
                    "line": 1,
                    "column": 49
                }
            },
            "range": [
                44,
                49
            ]
        },
        {
            "type": "Identifier",
            "value": "b",
            "start": 50,
            "end": 51,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 50
                },
                "end": {
                    "line": 1,
                    "column": 51
                }
            },
            "range": [
                50,
                51
            ]
        },
        {
            "type": "Punctuator",
            "value": "}",
            "start": 52,
            "end": 53,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 52
                },
                "end": {
                    "line": 1,
                    "column": 53
                }
            },
            "range": [
                52,
                53
            ]
        },
        {
            "type": "Punctuator",
            "value": "}",
            "start": 53,
            "end": 54,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 53
                },
                "end": {
                    "line": 1,
                    "column": 54
                }
            },
            "range": [
                53,
                54
            ]
        },
        {
            "type": "Punctuator",
            "value": ")",
            "start": 54,
            "end": 55,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 54
                },
                "end": {
                    "line": 1,
                    "column": 55
                }
            },
            "range": [
                54,
                55
            ]
        },
        {
            "type": "Punctuator",
            "value": "{",
            "start": 56,
            "end": 57,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 56
                },
                "end": {
                    "line": 1,
                    "column": 57
                }
            },
            "range": [
                56,
                57
            ]
        },
        {
            "type": "Punctuator",
            "value": "}",
            "start": 57,
            "end": 58,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 57
                },
                "end": {
                    "line": 1,
                    "column": 58
                }
            },
            "range": [
                57,
                58
            ]
        },
        {
            "type": "Punctuator",
            "value": ";",
            "start": 58,
            "end": 59,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 58
                },
                "end": {
                    "line": 1,
                    "column": 59
                }
            },
            "range": [
                58,
                59
            ]
        }
    ]
}