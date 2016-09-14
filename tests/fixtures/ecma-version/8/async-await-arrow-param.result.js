module.exports = {
    "type": "Program",
    "start": 0,
    "end": 47,
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 1,
            "column": 47
        }
    },
    "range": [
        0,
        47
    ],
    "body": [
        {
            "type": "FunctionDeclaration",
            "start": 0,
            "end": 46,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 46
                }
            },
            "range": [
                0,
                46
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
                    "end": 42,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 19
                        },
                        "end": {
                            "line": 1,
                            "column": 42
                        }
                    },
                    "range": [
                        19,
                        42
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
                        "type": "ArrowFunctionExpression",
                        "start": 23,
                        "end": 42,
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 23
                            },
                            "end": {
                                "line": 1,
                                "column": 42
                            }
                        },
                        "range": [
                            23,
                            42
                        ],
                        "id": null,
                        "generator": false,
                        "expression": true,
                        "async": true,
                        "params": [],
                        "body": {
                            "type": "AwaitExpression",
                            "start": 35,
                            "end": 42,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 35
                                },
                                "end": {
                                    "line": 1,
                                    "column": 42
                                }
                            },
                            "range": [
                                35,
                                42
                            ],
                            "argument": {
                                "type": "Identifier",
                                "start": 41,
                                "end": 42,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 41
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 42
                                    }
                                },
                                "range": [
                                    41,
                                    42
                                ],
                                "name": "b"
                            }
                        }
                    }
                }
            ],
            "body": {
                "type": "BlockStatement",
                "start": 44,
                "end": 46,
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 44
                    },
                    "end": {
                        "line": 1,
                        "column": 46
                    }
                },
                "range": [
                    44,
                    46
                ],
                "body": []
            }
        },
        {
            "type": "EmptyStatement",
            "start": 46,
            "end": 47,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 46
                },
                "end": {
                    "line": 1,
                    "column": 47
                }
            },
            "range": [
                46,
                47
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
            "type": "Identifier",
            "value": "async",
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
            "value": "(",
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
            "type": "Punctuator",
            "value": ")",
            "start": 30,
            "end": 31,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 30
                },
                "end": {
                    "line": 1,
                    "column": 31
                }
            },
            "range": [
                30,
                31
            ]
        },
        {
            "type": "Punctuator",
            "value": "=>",
            "start": 32,
            "end": 34,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 32
                },
                "end": {
                    "line": 1,
                    "column": 34
                }
            },
            "range": [
                32,
                34
            ]
        },
        {
            "type": "Identifier",
            "value": "await",
            "start": 35,
            "end": 40,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 35
                },
                "end": {
                    "line": 1,
                    "column": 40
                }
            },
            "range": [
                35,
                40
            ]
        },
        {
            "type": "Identifier",
            "value": "b",
            "start": 41,
            "end": 42,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 41
                },
                "end": {
                    "line": 1,
                    "column": 42
                }
            },
            "range": [
                41,
                42
            ]
        },
        {
            "type": "Punctuator",
            "value": ")",
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
            "type": "Punctuator",
            "value": "{",
            "start": 44,
            "end": 45,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 44
                },
                "end": {
                    "line": 1,
                    "column": 45
                }
            },
            "range": [
                44,
                45
            ]
        },
        {
            "type": "Punctuator",
            "value": "}",
            "start": 45,
            "end": 46,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 45
                },
                "end": {
                    "line": 1,
                    "column": 46
                }
            },
            "range": [
                45,
                46
            ]
        },
        {
            "type": "Punctuator",
            "value": ";",
            "start": 46,
            "end": 47,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 46
                },
                "end": {
                    "line": 1,
                    "column": 47
                }
            },
            "range": [
                46,
                47
            ]
        }
    ]
}