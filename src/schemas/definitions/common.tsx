const common = {
    "address": {
        "type": "object",
        "properties": {
        "street_address": { "type": "string" },
        "city":           { "type": "string" },
        "state":          { "type": "string" },
        "zip_code":          { "type": "string" },
        "country":          { "type": "string" }
        },
        "required": ["street_address", "city", "state"]
    },
    "name": {
        "type": "object",
        "title": "",
        "properties": {
        "first": {"type": "string", "title": "First Name"},
        "middle": {"type": "string", "title": "Middle Name"},
        "last": {"type": "string", "title": "Last Name"}
        }
    }
};
export default common;