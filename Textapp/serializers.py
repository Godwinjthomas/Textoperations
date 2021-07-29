from rest_framework import serializers
from Textapp.models import File


class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = File
        fields = ('Name', 'f_size', 'full_content', 'content', 'modified_date', 'created_date', 'Hashvalue')
