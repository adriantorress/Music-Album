echo "build back"
sudo docker build -t adriantds/album-back .

echo "build front"
sudo docker build -t adriantds/album-front ./front_end

echo "back push"
sudo docker push adriantds/album-back

echo "front push"
sudo docker push adriantds/album-front

echo "restart back"
kubectl rollout restart deployment/music-album

echo "restart front"
kubectl rollout restart deployment/music-album-front

echo "Sucessful"

exit 0