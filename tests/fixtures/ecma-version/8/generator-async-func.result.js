module.exports = {
    "type": "Program",
    "start": 0,
    "end": 44,
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 3,
            "column": 2
        }
    },
    "range": [
        0,
        44
    ],
    "body": [
        {
            "type": "FunctionDeclaration",
            "start": 0,
            "end": 43,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 3,
                    "column": 1
                }
            },
            "range": [
                0,
                43
            ],
            "id": {
                "type": "Identifier",
                "start": 10,
                "end": 14,
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 10
                    },
                    "end": {
                        "line": 1,
                        "column": 14
                    }
                },
                "range": [
                    10,
                    14
                ],
                "name": "wrap"
            },
            "generator": true,
            "expression": false,
            "async": false,
            "params": [],
            "body": {
                "type": "BlockStatement",
                "start": 17,
                "end": 43,
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 17
                    },
                    "end": {
                        "line": 3,
                        "column": 1
                    }
                },
                "range": [
                    17,
                    43
                ],
                "body": [
                    {
                        "type": "ExpressionStatement",
                        "start": 23,
                        "end": 41,
                        "loc": {
                            "start": {
                                "line": 2,
                                "column": 4
                            },
                            "end": {
                                "line": 2,
                                "column": 22
                            }
                        },
                        "range": [
                            23,
                            41
                        ],
                        "expression": {
                            "type": "CallExpression",
                            "start": 23,
                            "end": 41,
                            "loc": {
                                "start": {
                                    "line": 2,
                                    "column": 4
                                },
                                "end": {
                                    "line": 2,
                                    "column": 22
                                }
                            },
                            "range": [
                                23,
                                41
                            ],
                            "callee": {
                                "type": "Identifier",
                                "start": 23,
                                "end": 28,
                                "loc": {
                                    "start": {
                                        "line": 2,
                                        "column": 4
                                    },
                                    "end": {
                                        "line": 2,
                                        "column": 9
                                    }
                                },
                                "range": [
                                    23,
                                    28
                                ],
                                "name": "async"
                            },
                            "arguments": [
                                {
                                    "type": "AssignmentExpression",
                                    "start": 29,
                                    "end": 40,
                                    "loc": {
                                        "start": {
                                            "line": 2,
                                            "column": 10
                                        },
                                        "end": {
                                            "line": 2,
                                            "column": 21
                                        }
                                    },
                                    "range": [
                                        29,
                                        40
                                    ],
                                    "operator": "=",
                                    "left": {
                                        "type": "Identifier",
                                        "start": 29,
                                        "end": 30,
                                        "loc": {
                                            "start": {
                                                "line": 2,
                                                "column": 10
                                            },
                                            "end": {
                                                "line": 2,
                                                "column": 11
                                            }
                                        },
                                        "range": [
                                            29,
                                            30
                                        ],
                                        "name": "a"
                                    },
                                    "right": {
                                        "type": "YieldExpression",
                                        "start": 33,
                                        "end": 40,
                                        "loc": {
                                            "start": {
                                                "line": 2,
                                                "column": 14
                                            },
                                            "end": {
                                                "line": 2,
                                                "column": 21
                                            }
                                        },
                                        "range": [
                                            33,
                                            40
                                        ],
                                        "delegate": false,
                                        "argument": {
                                            "type": "Identifier",
                                            "start": 39,
                                            "end": 40,
                                            "loc": {
                                                "start": {
                                                    "line": 2,
                                                    "column": 20
                                                },
                                                "end": {
                                                    "line": 2,
                                                    "column": 21
                                                }
                                            },
                                            "range": [
                                                39,
                                                40
                                            ],
                                            "name": "b"
                                        }
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        },
        {
            "type": "EmptyStatement",
            "start": 43,
            "end": 44,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 1
                },
                "end": {
                    "line": 3,
                    "column": 2
                }
            },
            "range": [
                43,
                44
            ]
        }
    ],
    "sourceType": "script",
    "tokens": [
        {
            "type": "Keyword",
            "value": "function",
            "start": 0,
            "end": 8,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 8
                }
            },
            "range": [
                0,
                8
            ]
        },
        {
            "type": "Punctuator",
            "value": "*",
            "start": 8,
            "end": 9,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 8
                },
                "end": {
                    "line": 1,
                    "column": 9
                }
            },
            "range": [
                8,
                9
            ]
        },
        {
            "type": "Identifier",
            "value": "wrap",
            "start": 10,
            "end": 14,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 10
                },
                "end": {
                    "line": 1,
                    "column": 14
                }
            },
            "range": [
                10,
                14
            ]
        },
        {
            "type": "Punctuator",
            "value": "(",
            "start": 14,
            "end": 15,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 14
                },
                "end": {
                    "line": 1,
                    "column": 15
                }
            },
            "range": [
                14,
                15
            ]
        },
        {
            "type": "Punctuator",
            "value": ")",
            "start": 15,
            "end": 16,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 15
                },
                "end": {
                    "line": 1,
                    "column": 16
                }
            },
            "range": [
                15,
                16
            ]
        },
        {
            "type": "Punctuator",
            "value": "{",
            "start": 17,
            "end": 18,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 17
                },
                "end": {
                    "line": 1,
                    "column": 18
                }
            },
            "range": [
                17,
                18
            ]
        },
        {
            "type": "Identifier",
            "value": "async",
            "start": 23,
            "end": 28,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 4
                },
                "end": {
                    "line": 2,
                    "column": 9
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
            "start": 28,
            "end": 29,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 9
                },
                "end": {
                    "line": 2,
                    "column": 10
                }
            },
            "range": [
                28,
                29
            ]
        },
        {
            "type": "Identifier",
            "value": "a",
            "start": 29,
            "end": 30,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 10
                },
                "end": {
                    "line": 2,
                    "column": 11
                }
            },
            "range": [
                29,
                30
            ]
        },
        {
            "type": "Punctuator",
            "value": "=",
            "start": 31,
            "end": 32,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 12
                },
                "end": {
                    "line": 2,
                    "column": 13
                }
            },
            "range": [
                31,
                32
            ]
        },
        {
            "type": "Keyword",
            "value": "yield",
            "start": 33,
            "end": 38,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 14
                },
                "end": {
                    "line": 2,
                    "column": 19
                }
            },
            "range": [
                33,
                38
            ]
        },
        {
            "type": "Identifier",
            "value": "b",
            "start": 39,
            "end": 40,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 20
                },
                "end": {
                    "line": 2,
                    "column": 21
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
                    "line": 2,
                    "column": 21
                },
                "end": {
                    "line": 2,
                    "column": 22
                }
            },
            "range": [
                40,
                41
            ]
        },
        {
            "type": "Punctuator",
            "value": "}",
            "start": 42,
            "end": 43,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 0
                },
                "end": {
                    "line": 3,
                    "column": 1
                }
            },
            "range": [
                42,
                43
            ]
        },
        {
            "type": "Punctuator",
            "value": ";",
            "start": 43,
            "end": 44,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 1
                },
                "end": {
                    "line": 3,
                    "column": 2
                }
            },
            "range": [
                43,
                44
            ]
        }
    ]
}