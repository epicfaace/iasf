class JSONListFieldSchemas:
    """
    Schemas for all the JSON List Fields.
    Each key represents the field name.
    """
    schema = {
        "scores_ap": {
            "type": "array",
            "items": [
                {
                    "type": "object",
                    "properties": {
                        "exam": {
                            "type": "string"
                        },
                        "score": {
                            "type": "integer",
                            "minimum": "1",
                            "maximum": "5",
                            "required": False
                        }
                    }
                }
            ]
        },
        "activities": {
            "type": "array",
            "items": [
                {
                    "type": "object",
                    "properties": {
                        "Name": {
                            "type": "string"
                        },
                        "Grades": {
                            "type": "string"
                        },
                        "Description": {
                            "type": "string"
                        }
                    }
                }
            ]
        }
    }