PROJECT_ROOT=$(shell pwd)

run:
	@echo "Building with Titanium..."
	@mkdir -p "${PROJECT_ROOT}/build/iphone/"
	@PROJECT_ROOT="${PROJECT_ROOT}" DEVICE_TYPE=iphone bash "${PROJECT_ROOT}/titanium.sh"
clean:
	@echo "Performing clean build"
	@cd "${PROJECT_ROOT}"
	@rm -rfv build
	@mkdir -p "build/iphone/"