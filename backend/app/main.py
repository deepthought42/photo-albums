from flask import Flask, request, jsonify
from google.cloud import storage
import os

app = Flask(__name__)

# Initialize Google Cloud Storage client
client = storage.Client()

@app.route("/health", methods=["GET"])
def health_check():
    return jsonify({"status": "ok"})

@app.route("/create-album", methods=["POST"])
def create_album():
    data = request.json
    album_name = data.get("album_name")
    if not album_name:
        return jsonify({"error": "Album name is required"}), 400
    
    # Create a bucket for the album
    bucket_name = f"photo-album-{album_name}"
    bucket = client.create_bucket(bucket_name)
    return jsonify({"message": f"Bucket {bucket_name} created successfully"})

@app.route("/upload-photo", methods=["POST"])
def upload_photo():
    album_name = request.args.get("album_name")
    if not album_name:
        return jsonify({"error": "Album name is required"}), 400

    photo = request.files["photo"]
    bucket = client.bucket(f"photo-album-{album_name}")
    blob = bucket.blob(photo.filename)
    blob.upload_from_file(photo)

    return jsonify({"message": "Photo uploaded successfully"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)
