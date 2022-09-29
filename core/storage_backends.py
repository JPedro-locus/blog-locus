from storages.backends.s3boto3 import S3Boto3Storage

# Este arquivo será o que nós ira permitir conectar a AWS
# Com o django de maneira correta

class StaticStorage(S3Boto3Storage):
    location = 'static'
    default_acl = 'private'


class MediaStore(S3Boto3Storage):
    location = 'media'
    file_overwrite = False